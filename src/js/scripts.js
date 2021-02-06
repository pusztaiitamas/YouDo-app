const formElement = document.getElementById("form_element");
const ulElement = document.getElementById("youdo_list");
const createYouDoText =document.getElementById("youdo_text")

formElement.addEventListener("submit", function (ev) {
    event.preventDefault();
    const newYouDo = document.createElement("li");
    formElement.append(newYouDo);
    newYouDo.innerText = createYouDoText.value

})
