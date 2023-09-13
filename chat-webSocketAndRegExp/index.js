import {ChatView} from "./View/ChatView.js";

const ws = new WebSocket('ws://localhost:4000/chat');
const chatView = new ChatView();

chatView.bindEvent(onSaveBtnClick);

function onSaveBtnClick(event) {
    event.preventDefault();

    ws.send(JSON.stringify({
        username: chatView.nameInputEl.value,
        message: chatView.messageInput.value
    }));
}

ws.onclose = function (event) {
    console.log("onclose", event);
}

ws.onerror = function (event) {
    console.log("error", event);
}

ws.onmessage = function (event) {
    console.log("message", event);

    chatView.insertHTML(event.data);
}

ws.onopen = function (event) {
    console.log("open", event);
}