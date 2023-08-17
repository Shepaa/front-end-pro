import {API} from '../API/API.js';
import {waitersURL} from '../API/URL.js';
import {showError} from '../lib/libIndex.js';

const nameInputEl = document.querySelector(".nameInput");
const waitersId = document.querySelector(".surnameInput");
const phoneInputEl = document.querySelector(".phoneInput");
const table = document.querySelector(".table");
const btn = document.querySelector(".btn");
const todoAPI = new API(waitersURL);
let contactsList = [];
btn.addEventListener('click', onBtnClick);
table.addEventListener('click', onTableClick);
// TODO РЕШИТЬ ВОПРОС С АЙДИШКОЙ, У ТЕБЯ ТИПА ЕСТЬ ДВЕ,
//  И ТИПА ОНИ НЕ ОБНОВЯЛЮТСЯ И МОЖЕТ ОНИ ВООБЩЕ НЕ НУЖНЫ,
//  СПРОСИ В ГРУППЕ
function onBtnClick() {
    const todo = getTodoData();
    if (isTodoValid(todo)) {
        todoAPI.createEl(todo)
            .then((newTodo) => {
                renderContact(newTodo);
                clear()

            })
            .catch(e => showError(e.message));
    }
}

function getTodoData() {
    return {
        firstName: nameInputEl.value,
        phone: phoneInputEl.value,
    }
}

function isTodoValid(todo) {

    if (!todo.firstName || !todo.phone) {
        showError("Поля не должны быть пустыми");
        return false;
    }

    if (isNaN(todo.phone)) {
        showError("В поле Phone и ID могут быть только цифры");
        return false;
    }
    return true;
}

function renderContact(todo) {
    const contactList = generateHtml(todo);
    table.insertAdjacentHTML("beforeend", contactList)
}

function generateHtml(todo) {
    return `
    <tr class="col" data-id="${todo.id}">
        <td>${todo.firstName}</td>
        <td>${todo.phone}</td>
        <td>${todo.id}</td>
        
        <td><button class="deleteBtn" >Delete</button></td>
        <td><button class="editBtn">Edit</button></td>
    </tr>
`
}

todoAPI.getList()
    .then((list) => {
        renderList(list)
    })

function renderList(list) {
    const html = list.map(generateHtml).join('');

    table.insertAdjacentHTML(`beforeend`, html)
}

function onTableClick(e) {
    if (e.target.classList.contains('deleteBtn')) {
        onDeleteBtn(e)
    } else if (e.target.classList.contains('editBtn')) {
        fillForm(e);
    }

}

function onDeleteBtn(e) {
    const tr = e.target.closest(".col")
    const idTr = tr.dataset.id
    todoAPI.deleteEl(idTr)
        .then(() => tr.remove())
        .catch(e => showError(e.message));
}

function fillForm(e) {
    const tr = e.target.closest(".col")
    const idTr = tr.dataset.id
    nameInputEl.value = getContactData(tr).name;
    phoneInputEl.value = getContactData(tr).phone;
    btn.removeEventListener('click', onBtnClick);
    btn.currentId = idTr;
    btn.addEventListener(`click`, saveUpdatedData);
}

function getContactData(parent) {
    const name = parent.querySelector('td:nth-child(1)').textContent;

    const phone = parent.querySelector('td:nth-child(3)').textContent;

    return {
        name,
        phone
    };
}

function saveUpdatedData(e) {
    const updatedTodo = getTodoData();
    const idCol = e.target.currentId;
    todoAPI.updateEl(idCol, updatedTodo).then(() => {
        if (isTodoValid(updatedTodo)) {
            updateContactInTable(idCol, updatedTodo)
            clear();
            btn.removeEventListener('click', saveUpdatedData);
            btn.addEventListener(`click`, onBtnClick);
        }

    })
}

function clear() {
    nameInputEl.value = "";
    phoneInputEl.value = "";
}

function updateContactInTable(idCol, updatedTodo) {
    contactsList = document.querySelector(`[data-id="${idCol}"]`)
    const tdElements = contactsList.querySelectorAll('td')
    tdElements[0].textContent = updatedTodo.firstName;
    tdElements[2].textContent = updatedTodo.phone;
}


