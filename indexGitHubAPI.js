const btn = document.querySelector('#getWaitersBtn');
const list = document.querySelector('#list');
const inputEl = document.querySelector('#input');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    fetch(`https://api.github.com/users/${inputEl.value}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Nickname is not correct")
            }
        })
        .then((data) => {
            createWaiters(data.avatar_url, data.public_repos, data.followers)
        })
        .catch((error) => {
            console.log(`fail: ${error}`)
        });
}

function createWaiters(avatar, repositories, followers) {
    const HTML = `
    <div>
        <img src="${avatar}" alt="User Avatar">
    </div>
    <div class="info">
        <div>Amount of repositories: ${repositories}</div>
        <div>Amount of followers: ${followers}</div>
    </div>
`;
    list.insertAdjacentHTML("beforeend", HTML);
}
