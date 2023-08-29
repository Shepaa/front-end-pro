const nameInputEl = document.querySelector(".nameInput")
const surnameInputEl = document.querySelector(".surnameInput")
const phoneInputEl = document.querySelector(".phoneInput")
const table = document.querySelector(".table");
const btn = document.querySelector(".btn")



btn.addEventListener('click', onBtnClick);
table.addEventListener('click', onTableClick);
function onBtnClick() {
    const todo = getTodoData();
    if (isTodoValid(todo)) {
        renderData(todo);
        clear();
    }
}
function onTableClick(e) {
    const tr = e.target.closest(".col")
    if (e.target.classList.contains('deleteBtn')) {
        tr.remove();
    }
}
function getTodoData() {
    return {
        nameInputEl: nameInputEl.value,
        surnameInputEl: surnameInputEl.value,
        phoneInputEl: phoneInputEl.value,
    }
}
function isTodoValid(todo) {

    if (!todo.nameInputEl || !todo.surnameInputEl || !todo.phoneInputEl) {
        alert("Поля не должны быть пустыми");
        return false;
    }

    if (isNaN(todo.phoneInputEl)) {
        alert("В поле Phone могут быть только цифры");
        return false;
    }
    return true;
}
function renderData(todo) {
    const HTMLtemplate = `
    <tr class="col">
        <td>${todo.nameInputEl}</td>
        <td>${todo.surnameInputEl}</td>
        <td>${todo.phoneInputEl}</td>
         <td><button class="deleteBtn">[Delete]</button></td>
    </tr>`
    table.insertAdjacentHTML("beforeend", HTMLtemplate)
}
function clear() {
    nameInputEl.value = "";
    surnameInputEl.value = "";
    phoneInputEl.value = "";
}

