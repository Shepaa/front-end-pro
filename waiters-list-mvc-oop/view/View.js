import {showError} from "../../lib/showError.js";

export class View {

    constructor(options) {
        this.container = this.init();
        this.table = this.container.querySelector(".table");
        this.options = options;
        this.idInputEl = this.container.querySelector(".idInput")
        this.nameInputEl = this.container.querySelector(".nameInput");
        this.phoneInputEl = this.container.querySelector(".phoneInput");
        this.saveBtn = this.container.querySelector(".btn");

        this.bindEvents()
    }

    init() {
        const div = document.createElement('div')

        div.innerHTML = `
        <table class="table">
            <tr class="nav">
                <th>Name</th>
                <th>Phone</th>
                <th>ID</th>
                <th>Action</th>
            </tr>
            <tr class="input-container">
                <input type="hidden" class="idInput">
                <td><input type="text" class="nameInput"></td>
                <td><input type="text" class="phoneInput"></td>
                <td>
                    <button class="btn">Save</button>
                </td>
            </tr>
        </table>`

        return div
    }

    generateHtml(waiter) {
        return `
        <tr class="waiterItem" data-id="${waiter.id}">
            <td>${waiter.firstName}</td>
            <td>${waiter.phone}</td>
            <td>${waiter.id}</td>
            <td><button class="deleteBtn" >Delete</button></td>
            <td><button class="editBtn">Edit</button></td>
        </tr>`
    }

    appendTo(rootEl) {
        rootEl.append(this.container)
    }

    bindEvents() {
        this.table.addEventListener('click', this.onTableClick.bind(this))
        this.saveBtn.addEventListener('click', this.onFormSubmit.bind(this))
    }

    onFormSubmit(e) {
        e.preventDefault()

        const waiter = this.getInputsData();

        if (waiter !== undefined) {
            this.options.onSubmit(waiter)
        }
    }

    onTableClick(e) {
        const target = e.target;
        const contactEl = this.findWaiterEl(target);
        const id = Number(contactEl?.dataset?.id);

        if (id) {
            if (this.findRemoveBtn(target)) {
                this.options.onDelete(id)
            } else if (this.findEditBtn(target)) {
                this.options.onEdit(id);
            }
        }
    }

    renderWaiter(waiter) {
        const waiterHtml = this.generateHtml(waiter);

        this.table.insertAdjacentHTML("beforeend", waiterHtml);
    }

    renderWaiterList(list) {
        const html = list.map(this.generateHtml).join('');

        this.table.insertAdjacentHTML("beforeend", html);
    }

    fillInputs(waiter) {
        this.idInputEl.value = waiter.id
        this.nameInputEl.value = waiter.firstName;
        this.phoneInputEl.value = waiter.phone;
    }

    updateWaiterInTable(id, updatedWaiter) {
        const waiterEl = this.findWaiterElById(id);

        waiterEl.outerHTML = this.generateHtml(updatedWaiter)
    }

    getInputsData() {
        const waiter = {id: this.idInputEl.value, firstName: this.nameInputEl.value, phone: this.phoneInputEl.value}

        if (this.isWaiterValid(waiter)) {
            return waiter;
        }
    }


    findEditBtn(el) {
        return el.classList.contains('editBtn')
    }

    findRemoveBtn(el) {
        return el.classList.contains('deleteBtn')
    }

    findWaiterElById(id) {
        return this.table.querySelector(`[data-id="${id}"]`)
    }

    findWaiterEl(target) {
        return target.closest(".waiterItem");
    }

    deleteWaiterById(id) {
        const waiterEl = this.findWaiterElById(id)

        if (waiterEl) {
            waiterEl.remove()
        } else {
            throw new Error('Contact element not found')
        }
    }

    clearInputs() {
        this.idInputEl.value = "";
        this.nameInputEl.value = "";
        this.phoneInputEl.value = "";
    }

    isWaiterValid(waiter) {
        if (!waiter || !waiter.firstName || !waiter.phone) {
            showError("Поля не должны быть пустыми");
            return false;
        }

        if (isNaN(waiter.phone)) {
            showError("В поле Phone могут быть только цифры");
            return false;
        }
        return true;
    }
}