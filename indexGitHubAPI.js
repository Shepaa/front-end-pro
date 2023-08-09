const btn = document.querySelector('#getWaitersBtn');
const list = document.querySelector('#list');
const inputEl = document.querySelector('#input');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    fetch(`https://api.github.com/users/${inputEl.value}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            renderData(data)
        })
        .catch((error) => {
            alert(error)
        });
}

function renderData(data) {
    const HTML = `
    <div>
        <img src="${data.avatar_url}" alt="User Avatar">
    </div>
    <div class="info">
        <div>Amount of repositories: ${data.public_repos}</div>
        <div>Amount of followers: ${data.followers}</div>
    </div>
`;
    list.insertAdjacentHTML("beforeend", HTML);
}
