

const ordersEdit = document.querySelectorAll(".order_list .edit_order");

ordersEdit.forEach( function(item){
    item.addEventListener("click", function() {
        console.log(this.dataset.id)
        const url = "/oneOrder/" + this.dataset.id;
        fetch(url)
            .then(res => res.json())
            .then(data => updateOrderr(data))
            .catch("Nie ma takiego zamówienia");
    })
});

function updateOrderr(order) {
    const popUp = document.querySelector(".add_new_order_from_orderes");
    popUp.setAttribute("style", "display:block");

    const title = document.querySelector(".add_new_order_from_orderes h2");
    title.textContent = "Edytuj zamówienie";

    const name = document.querySelector(".handler_form_add_new_order .wrapper #name");
    name.value = order.name;
    const fileNo = document.querySelector(".handler_form_add_new_order .wrapper #fileNo");
    fileNo.value = order.fileNo;
    const material = document.querySelector(".handler_form_add_new_order .wrapper #material");
    material.value = order.material;
    const count = document.querySelector(".handler_form_add_new_order .wrapper #count");
    count.value = order.count;
    const color = document.querySelector(".handler_form_add_new_order .wrapper #color");
    color.value = order.color;
    const project = document.querySelector(".handler_form_add_new_order .wrapper #project");
    project.value = order.project;
    const model = document.querySelector(".handler_form_add_new_order .wrapper #model");
    model.value = order.model;

    const textSubmit= document.querySelector(".save_new_order.primary");
    textSubmit.textContent = "Aktualizuj";

}
