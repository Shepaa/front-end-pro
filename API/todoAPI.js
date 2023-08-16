export class TodoAPI {
constructor(url) {
    this.url = url;
}
    static URL = `https://62054479161670001741b708.mockapi.io/api/contacts/`;

    static request(url = '', method = 'GET', body) {
        return fetch(`${TodoAPI.URL}${url}`, {
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

    getContactList() {
        return TodoAPI.request()
            .catch((error) => {
                throw new Error(`Can not fitch todo list: ${error.message}`);
            })
    }

    createContactEl(todo) {
        return TodoAPI.request('', `POST`, todo)
            .catch(error => {
                throw new Error(`Can not create todo: ${error.message}`);
            })
    }

   deleteTodoEl(id) {
        return TodoAPI.request(id, `DELETE`)
            .catch((error) => {
                throw new Error(`Can not delete todo: ${error.message}`);
            })
    }

    updateContactEl(id, changes) {
        return TodoAPI.request(id, `PUT`, changes)
            .catch(error => {
                throw new Error(`Can not update todo: ${error.message}`);
            })
    }
}


