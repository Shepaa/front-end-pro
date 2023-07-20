const btn = document.querySelector("#msgButton");
btn.addEventListener("click", onBtnClick);


function onBtnClick() {
    const input = document.querySelector("#msgInput");
    if (input.value) {
        const ul = document.querySelector("#todoList");
        const li = document.createElement("li");
        li.textContent = input.value;
        ul.append(li)
        input.value = "";
    }

}