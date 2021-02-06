const formElement = document.getElementById("form_element");
const ulElement = document.getElementById("youdo_list");
const createYouDoText = document.getElementById("youdo_text");
const createButton = document.getElementById("youdo_button");
createYouDoText.setAttribute("required", "true");
createYouDoText.setAttribute("pattern", ".{6,}");
createButton.setAttribute("disabled", "true")

formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    //create div element
    const divElement = document.createElement("div");
    // create li elements
    const newYouDo = document.createElement("li");
    newYouDo.setAttribute("id", "todo_elements");
    ulElement.appendChild(newYouDo);
    const deleteButton = document.createElement("button");
    //create new input element
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("class", "date");
    const saveDate = document.createElement("button");
    formElement.append(newYouDo);
    formElement.append(dateInput);
    let paraElement = document.createElement("p");
    saveDate.addEventListener("click", function () {
        let saveInputValue = dateInput.value;
        paraElement.innerText = saveInputValue;
        formElement.append(paraElement);
        dateInput.remove();
        saveDate.remove();
    })
    formElement.append(saveDate);
    saveDate.innerHTML = " <i class=\"fas fa-save\"></i>";
    newYouDo.innerText = createYouDoText.value
    newYouDo.append(deleteButton);
    deleteButton.innerHTML = " <i class=\"fas fa-trash\"></i>";
    deleteButton.addEventListener("click", function (ev) {
        createYouDoText.parentNode.removeChild(newYouDo);
        paraElement.remove();

    })
    checkValidity(createYouDoText);
    saveInputValues(createYouDoText);
})

function checkValidity(element) {
    if (element.validity.valid === false) {
        element.style.border = "3px solid red"
    } else {
        element.style.border = "3px solid green"
    }
}

createYouDoText.addEventListener("change", function (element) {
    if (createYouDoText.validity.valid === true) {
        createButton.disabled = false;
    } else {
        createButton.disabled = true;
        createYouDoText.style.border = "3px solid red";
    }

})

function saveInputValues(element) {
    localStorage.setItem(element.value, element.value);

}

function loadInputValues(element) {
    localStorage.getItem(element.value, element.value);
}






