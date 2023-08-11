const TODO_LIST_ID = 'todoList';
const INPUT_EL_ID = 'msgInput';
const SUBMIT_BTN_ID = 'msgButton';
const DELETE_BTN_CLASS = 'deleteButton';

const URL = `https://mock-api-5678.nw.r.appspot.com/todos/`

const todoList = document.querySelector(`#${TODO_LIST_ID}`);
const inputEl = document.querySelector(`#${INPUT_EL_ID}`);
const submitBtnEl = document.querySelector(`#${SUBMIT_BTN_ID}`);

submitBtnEl.addEventListener(`click`, onBtnClick);
todoList.addEventListener('click', onUlClick);

function renderList(list) {
    const html = list.map(generateTodoHtml).join('')
    todoList.insertAdjacentHTML(`beforeend`, html)
}

getTodoList()
    .then((list) => {
        renderList(list)
    })
    .catch(e => showError(e.message))

function onBtnClick() {
    const todo = getData();
    if (!isTodoValid(todo)) {
        showError("Поле не должно быть пустым")
        return
    }

    createTodoEl(todo)
        .then((newTodo) => {
                renderTodo(newTodo);
                clear();
            }
        )
        .catch(e => showError(e.message))

}

function getData() {
    return {title: inputEl.value}
}

function isTodoValid(todo) {
    return todo.message !== ''
}


function renderTodo(todo) {
    const html = generateTodoHtml(todo)

    todoList.insertAdjacentHTML('beforeend', html);
}

function generateTodoHtml(todo) {
        return `
     <li class="li" data-id="${todo.id}">
        <span class="inputValue">${todo.title}</span>
        <button class="${DELETE_BTN_CLASS}">Delete</button>
    </li>
`


}

function clear() {
    inputEl.value = "";
}

function onUlClick(e) {
    const li = e.target.closest(".li")
    const span = e.target.closest(".inputValue")
    const id  = li.dataset.id

    if (e.target.classList.contains('deleteButton')) {
        deleteTodoEl(id)
            .then(() => li.remove())
            .catch(e => showError(e.message))

    }

    if (e.target.classList.contains('inputValue')) {
        span.classList.toggle('springgreen')
    }

}

function getTodoList() {
    return fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`${response.status} ${response.statusText}`);
        })
        .catch((error) => {
            throw new Error(`Can not fitch todo list: ${error.message}`);
        })
}

function createTodoEl(todo) {
    return fetch(URL, {
        method: `POST`,
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`${response.status} ${response.statusText}`);
        })
        .catch((error) => {
            throw new Error(`Can not create todo: ${error.message}`);
        })
}

function deleteTodoEl(id) {
    return fetch(`${URL}${id}`, {
        method: `DELETE`,
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(`${response.status} ${response.statusText}`);
        })
        .catch((error) => {
            throw new Error(`Can not delete todo: ${error.message}`);
        })
}