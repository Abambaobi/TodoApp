// MODEL SECTION
let todo = [];

// VIEW SECTION
function render() {
  const contentList = document.querySelector(".contentList");
  const container = document.querySelector(".container-fluid");
  container.appendChild(contentList);
  contentList.innerHTML = "";
  todo.forEach(function (tod) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    const childDiv = document.createElement("div");
    childDiv.classList.add("bg-warning");
    childDiv.classList.add("childDiv");
    childDiv.id = tod.id;

    childDiv.innerText = tod.name + " " + tod.date;
    childDiv.addEventListener("click", appendedChild);
    const DivContainer = document.createElement("div");
    DivContainer.classList.add("DivContainer");
    const checkContainer = document.createElement("div");
    checkContainer.style = "display:inline";
    checkContainer.append(checkBox);
    DivContainer.append(checkContainer, childDiv);
    contentList.appendChild(DivContainer);

    let clickCount = 0;

    checkBox.onchange = function () {
      switch (clickCount) {
        case 0:
          childDiv.innerText = childDiv.innerText + " " + "(Done)";
          clickCount = 1;
          break;

        case 1:
          childDiv.innerText = tod.name + " " + tod.date;
          clickCount = 0;
          break;
      }
    };
  });
}

// CONTROL SECTION
function addTodo() {
  const text = document.getElementById("text-bar");
  const date = document.getElementById("date");
  const textValue = text.value;
  const dateValue = date.value;
  todo.push({
    name: textValue,
    date: dateValue,
    id: new Date().getTime().toString(),
  });

  render();
}

function appendedChild(event) {
  let selectedDiv = event.target;
  let selectedDivId = selectedDiv.id;

  todo.forEach((todo) => {
    if (selectedDivId === todo.id) {
      selectedDiv.Id = "Abamba, Obi";
      todo.id = "Abamba, Obi";

      selectedDiv.classList.add("bg-danger");
      selectedDiv.classList.add("click");

      selectedDiv.onclick = function () {
        selectedDiv.classList.add("selectedDivSecond");
        todo.id = new Date().getTime().toString();
        selectedDiv.id = todo.id;
      };
    }
  });
  const deleteButton = document.getElementById("delete-todo");
  deleteButton.onclick = remove;
  function remove() {
    todo = todo.filter((todo) => {
      if (selectedDiv.Id && todo.id === "Abamba, Obi") {
        confirm(`Are you sure you want to delete ${todo.name} ?`);
        return false;
      } else {
        return true;
      }
    });
    render();
  }
}
