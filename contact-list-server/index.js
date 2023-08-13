const nameInputEl = document.querySelector(".nameInput")
const surnameInputEl = document.querySelector(".surnameInput")
const phoneInputEl = document.querySelector(".phoneInput")
const table = document.querySelector(".table");
const btn = document.querySelector(".btn")
let contactsList = [];

btn.addEventListener('click', onBtnClick);
table.addEventListener('click', onTableClick);


function renderList(list) {
    const html = list.map(generateHtml).join('');
    table.insertAdjacentHTML(`beforeend`, html)
}

function onBtnClick() {
    const todo = getTodoData();
    if (isTodoValid(todo)) {
        TodoAPI.createContactEl(todo)
            .then((NewTodo) => {
                renderContact(NewTodo);
                clear();

            })
            .catch(e => showError(e.message));
    }
}

TodoAPI.getContactList()
    .then((list) => {
        contactsList = list;
        renderList(contactsList);
    })


function onTableClick(e) {
    const tr = e.target.closest(".col")
    const idTr = tr.dataset.id
    if (e.target.classList.contains('deleteBtn')) {
        TodoAPI.deleteTodoEl(idTr)
            .then(() => tr.remove())
            .catch(e => showError(e.message))
    } else if (e.target.classList.contains('editBtn')) {
        nameInputEl.value = getContactData(tr).name;
        surnameInputEl.value = getContactData(tr).lastName;
        phoneInputEl.value = getContactData(tr).phone;
        btn.removeEventListener('click', onBtnClick);
        btn.addEventListener(`click`, onEditBtnClick);
    }
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

function onEditBtnClick() {
    const updatedTodo = getTodoData();
    const idCol = document.querySelector('.col').dataset.id;
    TodoAPI.updateContactEl(idCol, updatedTodo).then(() => {
        if (isTodoValid(updatedTodo)) {
            updateContactInTable(idCol, updatedTodo)
            clear();

            btn.removeEventListener('click', onEditBtnClick);
            btn.addEventListener(`click`, onBtnClick);
        }

    })
}

function updateContactInTable(idCol, updatedTodo) {
    const lists = document.querySelectorAll('.col');
    lists.forEach((list) => {
        if (list.dataset.id === idCol) {
            const tdElements = list.querySelectorAll('td');
            tdElements[0].textContent = updatedTodo.firstName;
            tdElements[1].textContent = updatedTodo.lastName;
            tdElements[2].textContent = updatedTodo.phone;
        }
    });
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
        <td><button class="deleteBtn">Delete</button></td>
        <td><button class="editBtn">Edit</button></td>
    </tr>
`
}

function clear() {
    nameInputEl.value = "";
    surnameInputEl.value = "";
    phoneInputEl.value = "";
}

