import {API} from "../../API/API.js";
import {waitersURL} from "../../API/URL.js";
import {showError} from "../../lib/showError.js";

export class Collection {
    #list = []

    constructor() {
    this.api = new API(waitersURL)
    }

    getList() {
        return this.api.getList()
            .then(list => {
               this.setWaitersList(list);

                return list;
            });
    }

    remove(id) {
        return this.api.delete(id)
            .then(() => this.deleteWaiterById(id))
            .catch(e => showError(e.message));
    }

    create(data) {
        return this.api.create(data)
            .then(newData => {
                this.addWaiterInList(newData);

                return newData
            })
            .catch(e => showError(e.message));
    }

    update(id, changes) {
        return this.api.update(id, changes)
            .then(() => this.replaceWaiterInList(id, changes))
            .catch(e => showError(e.message));
    }

   setWaitersList(data) {
        this.#list = data;
    }

    addWaiterInList(data) {
        this.#list.push(data);
    }

    deleteWaiterById(id) {
        this.#list = this.#list.filter(w => w.id !== Number(id));
    }


    replaceWaiterInList(id, waiter) {
        this.#list = this.#list.map(w => w.id === Number(id) ? {...waiter, id: Number(id)} : w);
    }

    getWaiterById (id) {
        return this.#list.find(waiter => waiter.id === id)
    }
}