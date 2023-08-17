import {API} from '../API/API.js';
import {waitersURL} from '../API/URL.js';
import {showError} from '../lib/libIndex.js';

const nameInputEl = document.querySelector(".nameInput");
const phoneInputEl = document.querySelector(".phoneInput");
const table = document.querySelector(".table");
const btn = document.querySelector(".btn");
const todoAPI = new API(waitersURL);
let waitersList = [];

btn.addEventListener('click', onBtnClick);
table.addEventListener('click', onTableClick);

todoAPI.getList()
    .then((list) => {
        renderWaitersList(list)
    });

function onBtnClick() {
    const todo = getWaitersData();
    if (isTodoValid(todo)) {
        todoAPI.createEl(todo)
            .then((newTodo) => {
                renderWaiters(newTodo);
                clear();
            })
            .catch(e => showError(e.message));
    }
}

function getWaitersData() {
    return {
        firstName: nameInputEl.value,
        phone: phoneInputEl.value,
    };
}

function isTodoValid(todo) {
    if (!todo.firstName || !todo.phone) {
        showError("Поля не должны быть пустыми");
        return false;
    }

    if (isNaN(todo.phone)) {
        showError("В поле Phone могут быть только цифры");
        return false;
    }
    return true;
}

function renderWaiters(todo) {
    const WaitersHtml = generateHtml(todo);
    table.insertAdjacentHTML("beforeend", WaitersHtml);
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

function onTableClick(e) {
    if (e.target.classList.contains('deleteBtn')) {
        onDeleteBtnClick(e);
    } else if (e.target.classList.contains('editBtn')) {
        fillForm(e);
    }
}

function onDeleteBtnClick(e) {
    const tr = e.target.closest(".col");
    const idTr = tr.dataset.id;
    todoAPI.deleteEl(idTr)
        .then(() => tr.remove())
        .catch(e => showError(e.message));
}

function fillForm(e) {
    const tr = e.target.closest(".col");
    const idTr = tr.dataset.id;
    nameInputEl.value = getWaitersFormsData(tr).name;
    phoneInputEl.value = getWaitersFormsData(tr).phone;
    btn.removeEventListener('click', onBtnClick);
    btn.currentId = idTr;
    btn.addEventListener(`click`, saveUpdatedData);
}

function getWaitersFormsData(parent) {
    const name = parent.querySelector('td:nth-child(1)').textContent;
    const phone = parent.querySelector('td:nth-child(2)').textContent;

    return {
        name,
        phone
    };
}

function saveUpdatedData(e) {
    const updatedTodo = getWaitersData();
    const idCol = e.target.currentId;
    todoAPI.updateEl(idCol, updatedTodo).then(() => {
        if (isTodoValid(updatedTodo)) {
            updateWaitersInTable(idCol, updatedTodo);
            clear();
            btn.removeEventListener('click', saveUpdatedData);
            btn.addEventListener(`click`, onBtnClick);
        }

    })
}

function updateWaitersInTable(idCol, updatedTodo) {
    waitersList = document.querySelector(`[data-id="${idCol}"]`);
    const tdElements = waitersList.querySelectorAll('td');
    tdElements[0].textContent = updatedTodo.firstName;
    tdElements[1].textContent = updatedTodo.phone;
}

function clear() {
    nameInputEl.value = "";
    phoneInputEl.value = "";
}

function renderWaitersList(list) {
    const html = list.map(generateHtml).join('');

    table.insertAdjacentHTML(`beforeend`, html);
}