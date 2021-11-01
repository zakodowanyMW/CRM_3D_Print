const handler = document.querySelector(".table_filtr .primary");
const popUp = document.querySelector(".add_new_order_from_orderes");
const close = document.querySelector(".add_new_order_from_orderes .close");
const sendForm = document.querySelector(".save_new_order");
// const sendForm = document.querySelector(".handler_form_add_new_order");

handler.addEventListener("click", () => {
    popUp.setAttribute("style", "display:block");
})

close.addEventListener("click", () => {
    popUp.setAttribute("style", "display:none");
})


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

