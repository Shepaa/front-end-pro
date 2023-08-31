import {
    create,
    getList,
    getWaitersList,
    remove,
    update,
} from './modelWaiters.js'
import {
    fillInputs,
    findEditBtn,
    findRemoveBtn,
    getInputsData,
    clear,
    renderWaiter,
    renderWaiterList,
    table,
    saveBtn,
    updateWaiterInTable, getWaiterById, isWaiterValid
} from './waitersView.js'


export function startApp() {
    saveBtn.addEventListener('click', onSaveBtnClick);
    table.addEventListener('click', onTableClick);

    getList()
        .then((list) => {
            renderWaiterList(list);
        });
}

export function onSaveBtnClick() {
    const waiter = getInputsData();

    if (!isWaiterValid(waiter)) {
        return;
    }

    if (Number(waiter.id)) {
        update(waiter.id, waiter)
            .then(() => {
                updateWaiterInTable(waiter.id, waiter);
                clear();
            })
    } else {
        create(waiter)
            .then((newWaiter) => {
                renderWaiter(newWaiter);
                clear();
            })
    }
}

export function onTableClick(e) {
    const target = e.target
    if (findRemoveBtn(target)) {
        onDeleteBtnClick(target);
    } else if (findEditBtn(target)) {
        fillInputs(target, getWaitersList());

    }
}

function onDeleteBtnClick(el) {
    const waiter = getWaiterById(el)
    const waiterId = waiter.dataset.id
    remove(waiterId)
        .then(() => waiter.remove());
}


