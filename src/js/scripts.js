const formElement = document.getElementById("form_element");
const ulElement = document.getElementById("youdo_list");
const createYouDoText = document.getElementById("youdo_text");
const createButton = document.getElementById("youdo_button");
createYouDoText.setAttribute("required", "true");
createYouDoText.setAttribute("pattern", ".{6,}");
createButton.setAttribute("disabled","true")

console.log(createYouDoText);
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const newYouDo = document.createElement("li");
    const deleteButton = document.createElement("button");
    formElement.append(newYouDo);
    newYouDo.innerText = createYouDoText.value
    newYouDo.append(deleteButton);
    deleteButton.innerHTML = " <i class=\"fas fa-trash\"></i>";
    deleteButton.addEventListener("click", function (ev) {
        createYouDoText.parentNode.removeChild(newYouDo);
    })
    checkValidity(createYouDoText);
})

function checkValidity(element) {
    if (element.validity.valid === false){
        element.style.border = "3px solid red"
    }else {
        element.style.border = "3px solid green"
    }
        }

createYouDoText.addEventListener("change", function (element){
   if (createYouDoText.validity.valid === true){
       createButton.disabled = false;
   }else {
       createButton.disabled = true;
       createYouDoText.style.border = "3px solid red";
   }

})

