import {showError} from "../lib/showError.js";

const nameInputEl = document.querySelector(".nameInput");
const phoneInputEl = document.querySelector(".phoneInput");
export const table = document.querySelector(".table");
export const btn = document.querySelector(".btn");

export function generateHtml(todo) {
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

export function renderWaiter(todo) {
    const WaitersHtml = generateHtml(todo);
    table.insertAdjacentHTML("beforeend", WaitersHtml);
}

export function renderWaitersList(list) {
    const html = list.map(generateHtml).join('');
    table.insertAdjacentHTML(`beforeend`, html);
}

export function fillInputs(e, h1, h2) {
    const btn = document.querySelector(".btn");
    const tr = e.target.closest(".col");
    const idTr = tr.dataset.id;
    nameInputEl.value = getWaiterFormData(tr).name;
    phoneInputEl.value = getWaiterFormData(tr).phone;
    btn.removeEventListener('click', h1);
    btn.currentId = idTr;
    btn.addEventListener(`click`, h2);
}

function getWaiterFormData(parent) {
    const name = parent.querySelector('td:nth-child(1)').textContent;
    const phone = parent.querySelector('td:nth-child(2)').textContent;

    return {
        name,
        phone
    };
}

export function updateWaiterInTable(idCol, updatedTodo) {
    const waitersEl = document.querySelector(`[data-id="${idCol}"]`);
    const tdElements = waitersEl.querySelectorAll('td');
    tdElements[0].textContent = updatedTodo.firstName;
    tdElements[1].textContent = updatedTodo.phone;
}

export function getInputsData() {
    const todo = {firstName: nameInputEl.value, phone: phoneInputEl.value}
    if (isTodoValid(todo)) {
        return todo;
    }
}

export function clear() {
    nameInputEl.value = "";
    phoneInputEl.value = "";
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

export function findEditBtn(e) {
    return e.target.classList.contains('editBtn')
}

export function findRemoveBtn(e) {
    return e.target.classList.contains('deleteBtn')
}

