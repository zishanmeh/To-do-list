document.getElementById("add-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("user-input").value;

  if (input !== "") {
    const tableBody = document.getElementById("table-body");
    const th = document.getElementsByTagName("th");
    const newTr = document.createElement("tr");
    const newTh = document.createElement("th");
    const newTd = document.createElement("td");
    const newTdAction = document.createElement("td");
    const actionBtn = document.createElement("button");
    actionBtn.classList.add("btn");
    actionBtn.classList.add("btn-error");
    actionBtn.classList.add("clear-item");
    actionBtn.textContent = "Clear Item";
    newTh.textContent = th.length - 2;
    newTd.textContent = input;
    tableBody.appendChild(newTr);
    newTr.appendChild(newTh);
    newTr.appendChild(newTd);
    newTr.appendChild(newTdAction);
    newTdAction.appendChild(actionBtn);
    document.getElementById("user-input").value = "";
  } else {
    alert("Please write something you have to do");
  }
});

document.getElementById("table-body").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.parentNode.remove();
    const Allth = document.getElementsByTagName("th");
    for (let i = 3; i < Allth.length; i++) {
      Allth[i].textContent = i - 2;
    }
  }
});
