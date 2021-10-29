const handler = document.querySelector(".table_filtr .primary");
const popUp = document.querySelector(".add_new_order_from_orderes");
const close = document.querySelector(".add_new_order_from_orderes .close");

handler.addEventListener("click", () => {
    popUp.setAttribute("style", "display:block");
})

close.addEventListener("click", () => {
    popUp.setAttribute("style", "display:none");
})
