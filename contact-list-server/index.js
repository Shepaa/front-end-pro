import {API} from '../API/API.js';
import {todoUrl} from '../API/URL.js';
import {showError} from '../lib/libIndex.js';

const nameInputEl = document.querySelector(".nameInput");
const surnameInputEl = document.querySelector(".surnameInput");
const phoneInputEl = document.querySelector(".phoneInput");
const table = document.querySelector(".table");
const btn = document.querySelector(".btn");
const todoAPI = new API(todoUrl);
let contactsList = [];
btn.addEventListener('click', onBtnClick);
table.addEventListener('click', onTableClick);

function onBtnClick() {
    const todo = getTodoData();
    if (isTodoValid(todo)) {
        todoAPI.create(todo)
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
        lastName: surnameInputEl.value,
        phone: phoneInputEl.value,
    }
}

function isTodoValid(todo) {

    if (!todo.firstName || !todo.lastName || !todo.phone) {
        showError("Поля не должны быть пустыми");
        return false;
    }

    if (isNaN(todo.phone)) {
        showError("В поле Phone могут быть только цифры");
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
        <td>${todo.lastName}</td>
        <td>${todo.phone}</td>
        <td><button class="deleteBtn" >Delete</button></td>
        <td><button class="editBtn">Edit</button></td>
    </tr>
`
}

todoAPI.getList()
    .then((list) => {
        renderList(list);
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
    todoAPI.delete(idTr)
        .then(() => tr.remove())
        .catch(e => showError(e.message));
}

function fillForm(e) {
    const tr = e.target.closest(".col")
    const idTr = tr.dataset.id
    nameInputEl.value = getContactData(tr).name;
    surnameInputEl.value = getContactData(tr).lastName;
    phoneInputEl.value = getContactData(tr).phone;
    btn.removeEventListener('click', onBtnClick);
    btn.currentId = idTr;
    btn.addEventListener(`click`, saveUpdatedData);
}

function getContactData(parent) {
    const name = parent.querySelector('td:nth-child(1)').textContent;
    const lastName = parent.querySelector('td:nth-child(2)').textContent;
    const phone = parent.querySelector('td:nth-child(3)').textContent;

    return {
        name,
        lastName,
        phone
    };
}

function saveUpdatedData(e) {
    const updatedTodo = getTodoData();
    const idCol = e.target.currentId;
    todoAPI.update(idCol, updatedTodo).then(() => {
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
    surnameInputEl.value = "";
    phoneInputEl.value = "";
}

function updateContactInTable(idCol, updatedTodo) {
    contactsList = document.querySelector(`[data-id="${idCol}"]`)
    const tdElements = contactsList.querySelectorAll('td')
    tdElements[0].textContent = updatedTodo.firstName;
    tdElements[1].textContent = updatedTodo.lastName;
    tdElements[2].textContent = updatedTodo.phone;
}


