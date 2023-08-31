import {showError} from "../lib/showError.js";


const idInputEl = document.querySelector(".idInput")
const nameInputEl = document.querySelector(".nameInput");
const phoneInputEl = document.querySelector(".phoneInput");
export const table = document.querySelector(".table");
export const saveBtn = document.querySelector(".btn");

export function generateHtml(waiter) {
    return `
    <tr class="waiterItem" data-id="${waiter.id}">
        <td>${waiter.firstName}</td>
        <td>${waiter.phone}</td>
        <td>${waiter.id}</td>
        <td><button class="deleteBtn" >Delete</button></td>
        <td><button class="editBtn">Edit</button></td>
    </tr>
`
}

export function renderWaiter(waiter) {
    const WaitersHtml = generateHtml(waiter);
    table.insertAdjacentHTML("beforeend", WaitersHtml);
}

export function renderWaiterList(list) {
    const html = list.map(generateHtml).join('');
    table.insertAdjacentHTML(`beforeend`, html);
}

export function fillInputs(el, waitersList) {
    const waiterItem = getWaiterById(el);
    const waiterId = waiterItem.dataset.id;
    const waiterById = findWaiterById(waiterId, waitersList);

    idInputEl.value = waiterById.id
    nameInputEl.value = waiterById.firstName;
    phoneInputEl.value = waiterById.phone;
}

function findWaiterById(id, waitersList) {

    return waitersList.find(waiter => waiter.id ===Number(id));

}

function getTdElements(id) {
    const waiterEl = document.querySelector(`[data-id="${id}"]`);
    return waiterEl.querySelectorAll('td');

}

export function updateWaiterInTable(id, updatedWaiter) {
    const tdElements = getTdElements(id);

    tdElements[0].textContent = updatedWaiter.firstName;
    tdElements[1].textContent = updatedWaiter.phone;
}

export function getInputsData() {
    const waiter = {id: idInputEl.value, firstName: nameInputEl.value, phone: phoneInputEl.value}

    if (isWaiterValid(waiter)) {
        return waiter;
    }
}

export function clear() {
    idInputEl.value = "";
    nameInputEl.value = "";
    phoneInputEl.value = "";
}

export function isWaiterValid(waiter) {
    if (!waiter.firstName || !waiter.phone) {
        showError("Поля не должны быть пустыми");
        return false;
    }

    if (isNaN(waiter.phone)) {
        showError("В поле Phone могут быть только цифры");
        return false;
    }
    return true;
}

export function findEditBtn(el) {
    return el.classList.contains('editBtn')
}

export function findRemoveBtn(el) {
    return el.classList.contains('deleteBtn')
}

export function getWaiterById(el) {
    return el.closest(".waiterItem");
}