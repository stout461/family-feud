// START WS

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleXBuzz(xs) {
  document.getElementById('x-buzzer').play();

  if (xs >= 1) document.getElementById("x-two").classList.remove('invisible');
  if (xs >= 2) document.getElementById("x-one").classList.remove('invisible');
  if (xs === 3) document.getElementById("x-three").classList.remove('invisible');

  console.log(`${xs} Xs shown`);

  await sleep(2000); // wait 2 seconds

  // Hide them again
  document.getElementById("x-one").classList.add('invisible');
  document.getElementById("x-two").classList.add('invisible');
  document.getElementById("x-three").classList.add('invisible');
}

const client = "board"
const parser = new DOMParser();

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN");
    startHeartbeat();
}

socket.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    console.log(eventData)
    let xmlString = eventData.data;
    if (xmlString != ""){
        xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    }
    switch (eventData.content){
        case "SYN":
            sendJSON("ACK");
            break;
        case "questionChange":
            category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            index = xmlDoc.getElementsByTagName('index')[0].childNodes[0].nodeValue;
            openModal(category, index)
            app._data.boardData[category][index].price = null
            break;
        case "returnToBoard":
            closeModal()
            break;
        case "submitPlayers":
            team1Name = xmlDoc.getElementsByTagName('team1Name')[0].childNodes[0].nodeValue;
            team2Name = xmlDoc.getElementsByTagName('team2Name')[0].childNodes[0].nodeValue;

            app._data.teamOneName = team1Name;
            app._data.teamTwoName = team2Name;

            break;
        case "changeMoney":
            playerIndex = xmlDoc.getElementsByTagName('playerIndex')[0].childNodes[0].nodeValue;
            newMoney = xmlDoc.getElementsByTagName('newMoney')[0].childNodes[0].nodeValue;
            app._data.players[playerIndex].money = newMoney;
            break;
        case "changeBoard":
            app._data.boardData.answers.forEach((answer)=> {
                document.getElementById(`${answer.placement}index`).classList.add('visible')
                document.getElementById(`${answer.placement}index`).classList.remove('invisible')
                document.getElementById(`${answer.placement}answer`).classList.add('d-none')
                document.getElementById(`${answer.placement}votes`).classList.add('d-none')
            })
            boardName = xmlDoc.getElementsByTagName('boardName')[0].childNodes[0].nodeValue;
            app.request(boardName);
            app._data.liveScore = 0;
            break;
        case "startGame":
            introImage = document.getElementById('intro-image');
            introImage.innerHTML = "";
            introImage.classList = "d-none"
            break;
        case "finalJeopardy":
            category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            finalJeopardyModal(category)
            break;
        case "finalJeopardypt2":
            question = xmlDoc.getElementsByTagName('question')[0].childNodes[0].nodeValue;
            finalJeopardyModal(question)
            break;
        case "finalJeopardyMusic":
            document.getElementById('final-jeopardy-music').play();
            break;
        case "buzzIn":
            player = xmlDoc.getElementsByTagName('player')[0].childNodes[0].nodeValue;
            buzzIn(player)
            break;
        case "revealAnswer":
            votes = xmlDoc.getElementsByTagName('votes')[0].childNodes[0].nodeValue;
            app._data.liveScore += Number(votes)

            answerPlacement = xmlDoc.getElementsByTagName('placement')[0].childNodes[0].nodeValue;
            app._data.boardData.answers.forEach((answer) => {
                if (answer.placement == answerPlacement){
                    document.getElementById(`${answerPlacement}index`).classList.remove('visible')
                    document.getElementById(`${answerPlacement}index`).classList.add('invisible')
                    /*
                    document.getElementById(`${answerPlacement}answer`).classList.remove('invisible')
                    document.getElementById(`${answerPlacement}answer`).classList.add('visible')
                    document.getElementById(`${answerPlacement}votes`).classList.remove('invisible')
                    document.getElementById(`${answerPlacement}votes`).classList.add('visible')
                    */
                    document.getElementById(`${answerPlacement}answer`).classList.remove('d-none')
                    document.getElementById(`${answerPlacement}votes`).classList.remove('d-none')
                }
            })
            document.getElementById('correct-ding').play();
            break;
        case "changeScore":
            score = xmlDoc.getElementsByTagName('score')[0].childNodes[0].nodeValue;
            team = xmlDoc.getElementsByTagName('team')[0].childNodes[0].nodeValue;
            if (team == 1){
                app._data.teamOneScore = score;
            } else if (team == 2){
                app._data.teamTwoScore = score;
            }
            break;
        case "fastResponse":
            position = xmlDoc.getElementsByTagName('location')[0].childNodes[0].nodeValue;
            answer = xmlDoc.getElementsByTagName('answer')[0].childNodes[0].nodeValue;
            votes = Number(xmlDoc.getElementsByTagName('votes')[0].childNodes[0].nodeValue);
            app._data.liveScore += votes;
            document.getElementById(`${position}-a`).innerHTML = `${answer}`;
            document.getElementById(`${position}-v`).innerHTML = `${votes}`;
            document.getElementById('total').innerHTML = app._data.liveScore;
            break;
        case "setFastBoard":
            document.getElementById('modal').classList.add('show');
            app._data.liveScore = 0;
            document.getElementById('total').innerHTML = '0';
            break;
        case "themeSong":
            document.getElementById('mainMusic').play();
            break;
        case "x-buzz":
            xs = Number(xmlDoc.getElementsByTagName('xs')[0].childNodes[0].nodeValue);
            handleXBuzz(xs)
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


let sendJSON = (content) => {
    socket.send(`{
        "client": "${client}",
        "content": "${content}",
        "data": ""
    }`)
}

// END WS

var app = new Vue({
	el: "#app",
    mounted:function(){
        this.request('board1')
    },
    methods:{
        request: function(route) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `/${route}`);

            xhr.onload = function(){
                if (xhr.status === 200){
                    app._data.boardData = JSON.parse(xhr.responseText);
                }
                else{
                    console.log(xhr.status);
                }
            }
            xhr.send();
        }
    },
	data: {
        boardData: {},
		teamOneName: "team1",
		teamTwoName: "team2",
		teamOneScore: 0,
		teamTwoScore:0,
		liveScore: 0,
		questions: [
			"First thing you'd buy if you won the lottery",
			"What job would you have in purgatory",
			"What would you wish upon your worst enemy?",
			"What super power do you wish your partner had?"
		],
		current: 0,
		choiceses: [
			[
				{
					answer: "",
					votes: 0,
					placement: 1
				},
				{
					answer: "",
					votes: 0,
					placement: 2
				},
				{
					answer: "",
					votes: 0,
					placement: 3
				},
				{
					answer: "",
					votes: 0,
					placement: 4
				}
			]
		]
	}
})