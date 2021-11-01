const handler = document.querySelector(".table_filtr .primary");
const popUp = document.querySelector(".add_new_order_from_orderes");
const close = document.querySelector(".add_new_order_from_orderes .close");
const sendForm = document.querySelector(".save_new_order");
// const sendForm = document.querySelector(".handler_form_add_new_order");

handler.addEventListener("click", () => {
    popUp.setAttribute("style", "display:block");
    const titlePopUp = document.querySelector(".add_new_order_from_orderes h2");
    titlePopUp.textContent = "Dodaj nowe zamówienie";
    const buttonSaveNewOrder = document.querySelector(".handler_form_add_new_order .save_new_order");
    buttonSaveNewOrder.textContent = "Dodaj zlecenie";
    const name = document.querySelector(".handler_form_add_new_order .wrapper #name");
    name.value = "";
    const fileNo = document.querySelector(".handler_form_add_new_order .wrapper #fileNo");
    fileNo.value = "";
    const material = document.querySelector(".handler_form_add_new_order .wrapper #material");
    material.value = "";
    const count = document.querySelector(".handler_form_add_new_order .wrapper #count");
    count.value = "";
    const color = document.querySelector(".handler_form_add_new_order .wrapper #color");
    color.value = "";
    const project = document.querySelector(".handler_form_add_new_order .wrapper #project");
    project.value = "";
    const model = document.querySelector(".handler_form_add_new_order .wrapper #model");
    model.value = "";

    const spanAllertNewOrder = document.querySelectorAll(".handler_form_add_new_order span");
    spanAllertNewOrder.forEach(item => {
        item.textContent = "";
    })
})

close.addEventListener("click", () => {
    popUp.setAttribute("style", "display:none");
})

// start validation inputs & send form if it correct

    // Start Valid item name
    const item = document.querySelector(".input.item");
    const itemValid = document.querySelector(".text_valid_item");
    const patternEmail = /^[\w]{6,8}$/;
    item.addEventListener("input" , (e)=> {
        if(patternEmail.test(e.target.value) && (e.target.value.length > 3)) {
            itemValid.textContent = "";
            sendForm.disabled = false;
        } else {
            itemValid.textContent = "Podano nieprawidłowe dane";
            sendForm.disabled = true;
            return;
        }
    })
    // End Valid item name

