export class ChatView {
    constructor() {
        this.container = document.querySelector('#chatContainer');
        this.saveBtn = document.querySelector("#saveBtn");
        this.nameInputEl = document.querySelector('#nameInput');
        this.messageInput = document.querySelector('#messageInput');

        this.bindEvent()

    }

    bindEvent(event) {
        this.saveBtn.addEventListener('click', event)
    }

    insertHTML(event) {
        const data = JSON.parse(event)

        this.container.insertAdjacentHTML('beforeend', ` <p>${data.username}: ${data.message} </p> `)

        this.clearForm()
    }

    clearForm() {
        this.nameInputEl.value = '';
        this.messageInput.value = '';
    }
}