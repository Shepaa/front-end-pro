class TodoAPI {

    static URL = `https://62054479161670001741b708.mockapi.io/api/contacts/`;

    static getContactList() {
        return fetch(TodoAPI.URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`${response.status} ${response.statusText}`);
            })
            .catch((error) => {
                throw new Error(`Can not fitch todo list: ${error.message}`);
            })
    }

    static createContactEl(todo) {
        return fetch(TodoAPI.URL, {
            method: `POST`,
            body: JSON.stringify(todo),
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
            .catch(error => {
                throw new Error(`Can not create todo: ${error.message}`);
            })
    }

    static deleteTodoEl(id) {
        return fetch(`${TodoAPI.URL}${id}`, {
            method: `DELETE`,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`${response.status} ${response.statusText}`);
            })
            .catch((error) => {
                throw new Error(`Can not delete todo: ${error.message}`);
            })
    }

    static updateContactEl(id, changes) {
        return fetch(`https://62054479161670001741b708.mockapi.io/api/contacts/${id}`, {
            method: `PUT`,
            body: JSON.stringify(changes),
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
            .catch(error => {
                throw new Error(`Can not update todo: ${error.message}`);
            })
    }
}


