import {View} from "../view/View.js";
import {Collection} from "../model/Collection.js";

export class Controller {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.collection = new Collection()
        this.view = new View({
            onSubmit: contact => this.saveWaiter(contact),
            onDelete: (id) => {
                this.collection.remove(id)
                    .then(() => {
                        this.view.deleteWaiterById(id)
                    })
            },
            onEdit: (id) => {
                const waiter = this.collection.getWaiterById(id)

                this.view.fillInputs(waiter)
            }
        });
        this.view.appendTo(this.rootEl);
        this.collection.getList()
            .then((list) => {
                this.view.renderWaiterList(list);
            });
    }

    saveWaiter(waiter) {
        if (Number(waiter.id)) {
            this.collection.update(waiter.id, waiter)
                .then(() => {
                    this.view.updateWaiterInTable(waiter.id, waiter);
                    this.view.clearInputs();
                })
        } else {
            this.collection.create(waiter)
                .then((newWaiter) => {
                    this.view.renderWaiter(newWaiter);
                    this.view.clearInputs();
                })
        }
    }
}