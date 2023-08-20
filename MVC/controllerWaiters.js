
import {
    create,
    getList,
    remove, update,
} from './modelWaiters.js'
import {
    fillInputs,
    findEditBtn,
    findRemoveBtn,
    getInputsData,
    clear,
    renderWaiter,
    renderWaitersList,
    table,
    btn,
    updateWaiterInTable
} from './waitersView.js'


export function startApp() {
    btn.addEventListener('click', onBtnClick);
    table.addEventListener('click', onTableClick);
    getList()
        .then((list) => {
            renderWaitersList(list);
        });
}

export function onBtnClick() {
    const todo = getInputsData();
    create(todo)
        .then((newTodo) => {
            renderWaiter(newTodo);
            clear();
        })
}

export function onTableClick(e) {
    if (findRemoveBtn(e)) {
        onDeleteBtnClick(e);
    } else if (findEditBtn(e)) {
        fillInputs(e, onBtnClick, saveUpdatedData);
    }
}

function onDeleteBtnClick(e) {
    const tr = e.target.closest(".col");
    const idTr = tr.dataset.id;
    remove(idTr)
        .then(() => tr.remove());
}

function saveUpdatedData(e) {
    const updatedTodo = getInputsData();
    const idCol = e.target.currentId;

    update(idCol, updatedTodo)
        .then(() => {
            updateWaiterInTable(idCol, updatedTodo);
            clear();
            btn.removeEventListener('click', saveUpdatedData);
            btn.addEventListener(`click`, onBtnClick);
        })
}


