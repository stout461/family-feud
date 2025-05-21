// START WS

const client = "controller"

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN", "");
    startHeartbeat();
}

socket.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    console.log(eventData)
    switch (eventData.content){
        case "SYN":
            sendJSON("ACK", "");
            break;
    }
}

socket.onclose = function(event) {
    console.log("[close] connection closed");
    stopHeartbeat();
}

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`)
}

let hearbeatInterval;
const startHeartbeat = () => {
    hearbeatInterval = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN){
            sendJSON("PING", "")
        }
    }, 10000)
}

const stopHeartbeat = () => {
    clearInterval(hearbeatInterval)
}

let sendJSON = (content, data) => {
    socket.send(`{
        "client": "${client}",
        "content": "${content}",
        "data": "${data}"
    }`)
}

// END WS

var app = new Vue({
	el: "#app",
    mounted:function(){
        this.request('board1')
        this.getFastFeud()
    },
    methods:{
        request: function(route){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `/${route}`);

            xhr.onload = function(){
                if (xhr.status === 200){
                    app._data.boardData = JSON.parse(xhr.responseText);
                }
                else {
                    console.log(xhr.status);
                }
            }
            xhr.send();
        },
        getFastFeud: function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/final');

            xhr.onload = function(){
                if (xhr.status === 200){
                    fastFeud = JSON.parse(xhr.responseText);
                    app._data.fastData = fastFeud;
                }
                else {
                    console.log(xhr.status);
                }
            }
            xhr.send();
        },
        changeGameBoard: function(boardNum){
            sendJSON('changeBoard', `<data><boardName>board${boardNum}</boardName></data>`);
            for (let i = 1; i >= this.boardData.answers.length; i++){
                console.log(i)
                document.getElementById(i).classList.remove("bg-success")
            }
            this.request(`board${boardNum}`);
            this.current = boardNum;
            this.liveScore = 0;
            this.xs = 0;
        },
        submitPlayers: function() {
            team1Name = document.getElementById('team-1-name-input').value;
            team2Name = document.getElementById('team-2-name-input').value;

            sendJSON("submitPlayers", `<data><team1Name>${team1Name}</team1Name><team2Name>${team2Name}</team2Name></data>`);
            app._data.teamOneName = team1Name;
            app._data.teamTwoName = team2Name;
        },
        revealAnswer: function(placement, votes) {
            document.getElementById(`${this.current}${placement}`).classList.add("bg-success")
            this.liveScore += votes
            sendJSON("revealAnswer", `<data><placement>${placement}</placement><votes>${votes}</votes></data>`)
        },
        submitScore: function(team) {
            score = Number(document.getElementById("scoreIncrement").value);
            console.log(score)
            if (team == 1){
                score += this.teamOneScore;
                this.teamOneScore = score;
            }
            if (team == 2){
                score += this.teamTwoScore;
                this.teamTwoScore = score;
            }
            sendJSON("changeScore", `<data><score>${score}</score><team>${team}</team></data>`)
        },
        setFastBoard: function(){
            this.liveScore = 0;
            sendJSON("setFastBoard", "")
        },
        sendFastResponse: function(location){
            answer = document.getElementById(`${location}-a`).value;
            votes =  document.getElementById(`${location}-v`).value;
            this.liveScore += Number(votes)
            sendJSON("fastResponse", `<data><location>${location}</location><answer>${answer}</answer><votes>${votes}</votes></data>`)
        },
        playMainMusic: function(){
            sendJSON("themeSong", "")
        },
        xBuzz: function(){
            this.xs += 1;
            sendJSON("x-buzz", `<data><xs>${this.xs}</xs></data>`);
        }
    },
	data: {
        boardData: {
            question: "",
            answers: []
        },
		teamOneName: "team1",
		teamTwoName: "team2",
		teamOneScore: 0,
		teamTwoScore:0,
		liveScore: 0,
		current: 0,
        fastData: {},
        xs: 0
	}
})