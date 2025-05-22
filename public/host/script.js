const client = "host"

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
            app._data.question.category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            app._data.question.index = xmlDoc.getElementsByTagName('index')[0].childNodes[0].nodeValue;
            break;
        case "returnToBoard":
            app._data.question.category = null;
            app._data.question.index = null;
            break;
        case "changeBoard":
            boardName = xmlDoc.getElementsByTagName('boardName')[0].childNodes[0].nodeValue;
            app.request(boardName);
            app._data.mainBoard = true;
            app._data.fastFeud = false;
            break;
        case "setFastBoard":
            app._data.mainBoard = false;
            app._data.fastFeud = true;
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

var app = new Vue({
	el: "#app",
    mounted:function(){
        this.request('board1');
        this.getFastFeud();
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
        }
    },
	data: {
        boardData: {},
        fastData: {},
        fastFeud: false,
        mainBoard: false,
	}
})