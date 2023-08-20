import {API} from '../API/API.js';
import {waitersURL} from "../API/URL.js";
import {showError} from "../lib/showError.js";

const api = new API(waitersURL);
let waitersList = [];

export function getList() {
    return api.getList()
        .then(list => {
            setWaitersList(list);
            return list;
        });
}

export function remove(id) {
    return api.delete(id)
        .then(() => deleteWaiterById(id))
        .catch(e => showError(e.message));
}

export function create(data) {
    return api.create(data)
        .then(newData => {
            addWaiterInList(newData);
            return newData
        })
        .catch(e => showError(e.message));
}

function setWaitersList(data) {
    waitersList = data;
}

export function addWaiterInList(data) {
    waitersList.push(data);
}

export function deleteWaiterById(id) {
    waitersList = waitersList.filter(w => w.id !== Number(id));
}

export function update(id, changes) {
    return api.update(id, changes)
        .then(() => replaceWaiterInList(id, changes));

}

export function replaceWaiterInList(id, waiter) {
    waitersList = waitersList.map(w => w.id === Number(id) ? {...waiter, id: Number(id)} : w);
}