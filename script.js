// MODEL SECTION
let todo1 = JSON.parse(localStorage.getItem("newTodo"));
let todo = [];

if (Array.isArray(todo1)) {
  todo = todo1;
  render();
} else {
  todo = todo;
  render();
}

// VIEW SECTION
function render() {
  const contentList = document.querySelector(".contentList");

  const container = document.querySelector(".container-fluid");
  container.appendChild(contentList);
  contentList.innerHTML = "";
  todo.forEach(function (todo) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    let clickCount2 = 0;
    const childDiv = document.createElement("p");
    childDiv.addEventListener("click", appendedChild);
    // childDiv.addEventListener("tap", appendedChild);

    function appendedChild(event) {
      let selectedDiv = event.target;
      switch (clickCount2) {
        case 0:
          console.log(selectedDiv);
          if (selectedDiv.id === todo.id) {
            selectedDiv.id = "Abamba, Obi";
            todo.id = "Abamba, Obi";
          }
          clickCount2 = 1;
          selectedDiv.classList.remove("selectedDivSecond");
          selectedDiv.classList.add("bg-danger");
          selectedDiv.classList.add("click");
          break;

        case 1:
          console.log(selectedDiv);
          if (selectedDiv.id && todo.id === "Abamba, Obi") {
            selectedDiv.classList.add("selectedDivSecond");
            const newTime = new Date().getTime().toString();
            selectedDiv.id = newTime;
            todo.id = newTime;
          }
          clickCount2 = 0;
          break;
      }

      deleteFunc(selectedDiv);
    }
    // );

    childDiv.classList.add("bg-warning");
    childDiv.classList.add("childDiv");
    childDiv.id = todo.id;

    childDiv.innerText = todo.name + " " + todo.date;
    const DivContainer = document.createElement("div");
    DivContainer.classList.add("DivContainer");
    const checkContainer = document.createElement("div");
    checkContainer.classList.add("checkContainer");
    checkContainer.append(checkBox);
    DivContainer.append(checkContainer, childDiv);
    contentList.appendChild(DivContainer);

    let clickCount = 0;

    checkBox.onchange = function () {
      switch (clickCount) {
        case 0:
          childDiv.innerText = childDiv.innerText + " " + "👌(Done)";
          clickCount = 1;
          break;

        case 1:
          childDiv.innerText = todo.name + " " + todo.date;
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
  if (textValue === "") {
  } else {
    todo.push({
      name: textValue,
      date: dateValue,
      id: new Date().getTime().toString(),
    });
  }

  localStorage.setItem("newTodo", JSON.stringify(todo));

  render();
}

function deleteFunc(selectedDiv) {
  const deleteButton = document.getElementById("delete-todo");
  deleteButton.onclick = remove;
  function remove() {
    todo = todo.filter((todo) => {
      if (selectedDiv.id && todo.id === "Abamba, Obi") {
        switch (confirm(`Are you sure you want to delete ${todo.name} ?`)) {
          case true:
            return false;
            break;

          case false:
            todo.id = new Date().getTime().toString();
            selectedDiv.id = todo.id;
            return true;
            break;
        }
      } else {
        return true;
      }
    });
    localStorage.setItem("newTodo", JSON.stringify(todo));

    render();
  }
}

function clearEverything() {
  if (todo.length === 0) {
    return;
  } else if (confirm(`Clear todo list ?`) === true) {
    todo = todo.filter(() => false);
  } else {
    return true;
  }
  localStorage.setItem("newTodo", JSON.stringify(todo));
  render();
}
