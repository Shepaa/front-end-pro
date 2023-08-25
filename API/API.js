export class API {
    constructor(url) {
        this.url = url;
    }

    request(url = '', method = 'GET', body) {
        return fetch(`${this.url}${url}`, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error(`${response.status} ${response.statusText}`);
            })
    }

    getList() {
        return this.request()
            .catch((error) => {
                throw new Error(`Can not fitch: ${error.message}`);
            })
    }

    create(todo) {
        return this.request('', `POST`, todo)
            .catch(error => {
                throw new Error(`Can not create: ${error.message}`);
            })
    }

    delete(id) {
        return this.request(id, `DELETE`)
            .catch((error) => {
                throw new Error(`Can not delete : ${error.message}`);
            })
    }

    update(id, changes) {
        return this.request(id, `PUT`, changes)
            .catch(error => {
                throw new Error(`Can not update: ${error.message}`);
            })
    }
}


