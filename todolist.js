const btn = document.querySelector("#msgButton");
btn.addEventListener("click", onBtnClick);
const ul = document.querySelector("#todoList");
const input = document.querySelector("#msgInput");

function onBtnClick() {
    if (input.value) {
        const li = document.createElement("li");
        li.textContent = input.value;
        ul.append(li)
        input.value = "";
    }

}