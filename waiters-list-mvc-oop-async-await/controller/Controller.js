import {View} from "../view/View.js";
import {Collection} from "../model/Collection.js";

export class Controller {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.collection = new Collection()
        this.view = new View({
            onSubmit: waiter => this.saveWaiter(waiter),
            onDelete: async (id) => {
                await this.collection.remove(id)
                this.view.deleteWaiterById(id)
            },
            onEdit: (id) => {
                const waiter = this.collection.getWaiterById(id)

                this.view.fillInputs(waiter)
            }
        });
        this.view.appendTo(this.rootEl);
        this.showList()
    }

    async showList() {
        const list = await this.collection.getList()

        this.view.renderWaiterList(list);
    }

    async saveWaiter(waiter) {
        if (Number(waiter.id)) {
            await this.collection.update(waiter.id, waiter);
            this.view.updateWaiterInTable(waiter.id, waiter);
            this.view.clearInputs();
        } else {
            const newWaiter = await this.collection.create(waiter)

            this.view.renderWaiter(newWaiter);
            this.view.clearInputs();
        }
    }
}