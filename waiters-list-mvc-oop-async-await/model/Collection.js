import {API} from "../../API/API.js";
import {localHostUrl} from "../../API/URL.js";
import {showError} from "../../lib/showError.js";

export class Collection {
    #list = []

    constructor() {
        this.api = new API(localHostUrl)
    }

    async getList() {
        try {
            const list = await this.api.getList()

            this.setWaitersList(list);

            return list;
        } catch (e) {
            showError(e)
        }
    }

    async remove(id) {
        try {
            await this.api.delete(id);
            this.deleteWaiterById(id)
        } catch (e) {
            showError(e.message)
        }
    }

    async create(data) {
        try {
            const newData = await this.api.create(data);

            this.addWaiterInList(newData);

            return newData
        } catch (e) {
            showError(e.message)
        }
    }

    async update(id, changes) {
        try {
            const update = await this.api.update(id, changes)
            this.replaceWaiterInList(id, changes)
        } catch (e) {
            showError(e.message)
        }
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

    getWaiterById(id) {
        return this.#list.find(waiter => waiter.id === id)
    }
}