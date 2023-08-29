const TODO_LIST_ID = 'todoList';
const INPUT_EL_ID = 'msgInput';
const SUBMIT_BTN_ID = 'msgButton';
const DELETE_BTN_CLASS = 'deleteButton';

const todoList = document.querySelector(`#${TODO_LIST_ID}`);
const inputEl = document.querySelector(`#${INPUT_EL_ID}`);
const submitBtnEl = document.querySelector(`#${SUBMIT_BTN_ID}`);

submitBtnEl.addEventListener(`click`, onBtnClick);
todoList.addEventListener('click', onUlClick);

function onBtnClick() {
    const todo = getData();
    if (!isTodoValid(todo)) {
        showError("Поле не должно быть пустым")
        return
    }
    render()
    clear();
}

function getData() {
    return {message: inputEl.value}
}

function isTodoValid(todo) {
    return todo.message !== ''
}

function showError(message) {
    alert(message)
}

function render() {
    const HTMLtemplate = `
    <li class="li">
        <span class="inputValue">${inputEl.value}</span>
        <button class="${DELETE_BTN_CLASS}">Delete</button>
    </li>`
    todoList.insertAdjacentHTML('beforeend', HTMLtemplate);
}

function clear() {
    inputEl.value = "";
}

function onUlClick(e) {
    const li = e.target.closest(".li")
    const span = e.target.closest(".inputValue")

    if (e.target.classList.contains('deleteButton')) {
        li.remove();
    }

    if (e.target.classList.contains('inputValue')) {
        span.classList.toggle('springgreen')
    }
}

