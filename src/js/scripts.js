const formElement = document.getElementById("form_element");
const ulElement = document.getElementById("youdo_list");
const createYouDoText =document.getElementById("youdo_text")

formElement.addEventListener("submit", function (ev) {
    event.preventDefault();
    const newYouDo = document.createElement("li");
    const deleteButton = document.createElement("button");
    formElement.append(newYouDo);
    newYouDo.innerText = createYouDoText.value
    newYouDo.append(deleteButton);
    deleteButton.innerHTML = " <i class=\"fas fa-trash\"></i>";
    deleteButton.addEventListener("click",function (ev){
        createYouDoText.parentNode.removeChild(newYouDo);
    })
})
