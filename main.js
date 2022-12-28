const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".deleteAll");
const deleteBtns = document.getElementsByClassName("delete");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

const noteArea = document.querySelector(".noteArea");
const notePanel = document.querySelector(".notePanel");

const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");

let id = 0;
let selectedValue;

const openPanel = () => {
  notePanel.classList.remove("d-none");
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.classList.add("d-none");
  error.classList.add("invisible");
  textarea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textarea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNote();
    error.classList.add("invisible");
  } else {
    error.classList.remove("invisible");
    error.classList.add("visible");
  }
};

const createNote = () => {
  const note = document.createElement("div");
  note.classList.add("note", "mx-3", "my-4", "border", "border-dark");
  note.setAttribute("id", id);

  note.innerHTML = `
    <div
    class="noteHeader d-flex justify-content-between align-items-center p-3">
    <h3>${selectedValue}</h3>
    <button class="delete bg-transparent fs-4 border border-0" onclick="deleteNote(${id})">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <div class="noteBody px-2 py-3 fs-">
    ${textarea.value}
  </div>`;

  noteArea.appendChild(note);
  id++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.classList.add("d-none");
  checkColor(note);
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Dom":
      note.classList.add("bg-primary");
      break;
    case "Praca":
      note.classList.add("bg-warning");
      break;
    case "Inne":
      note.classList.add("bg-success");
      break;
  }
};

const deleteNote = (id) => {
  const deleteItem = document.getElementById(id);
  noteArea.removeChild(deleteItem);
};

const deleteAll = () => {
  noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);

deleteAllBtn.addEventListener("click", deleteAll);
