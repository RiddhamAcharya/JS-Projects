const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyText = document.getElementById("empty-text");
const addBtn = document.getElementById("add-btn");

function updateEmptyState() {
  emptyText.style.display = listContainer.children.length === 0 ? "block" : "none";
}

function addTask() {
  const value = inputBox.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;

  const span = document.createElement("span");
  span.innerHTML = "\u00d7";

  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
  updateEmptyState();
}

addBtn.addEventListener("click", addTask);

/* Add on Enter key */
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

/* toggle + delete */
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
  updateEmptyState();
});

/* localStorage */
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
  updateEmptyState();
}

showTask();
