

const ordersEdit = document.querySelectorAll(".order_list .edit_order");

ordersEdit.forEach( function(item){
    item.addEventListener("click", function() {
        console.log(this.dataset.id)
        const url = "/oneOrder/" + this.dataset.id;
        fetch(url)
            .then(res => res.json())
            .then(data => updateOrder(data, this.dataset.id))
            .catch("Nie ma takiego zamówienia");
    })
});

function updateOrder(order, id) {
    const popUp = document.querySelector(".add_new_order_from_orderes");
    popUp.setAttribute("style", "display:block");

    const title = document.querySelector(".add_new_order_from_orderes h2");
    title.textContent = "Edytuj zamówienie";

    let name = document.querySelector(".handler_form_add_new_order .wrapper #name");
    name.value = order.name;
    let fileNo = document.querySelector(".handler_form_add_new_order .wrapper #fileNo");
    fileNo.value = order.fileNo;
    let material = document.querySelector(".handler_form_add_new_order .wrapper #material");
    material.value = order.material;
    let count = document.querySelector(".handler_form_add_new_order .wrapper #count");
    count.value = order.count;
    let color = document.querySelector(".handler_form_add_new_order .wrapper #color");
    color.value = order.color;
    let project = document.querySelector(".handler_form_add_new_order .wrapper #project");
    project.value = order.project;
    let model = document.querySelector(".handler_form_add_new_order .wrapper #model");
    model.value = order.model;

    const spanAllertNewOrder = document.querySelectorAll(".handler_form_add_new_order span");
    spanAllertNewOrder.forEach(item => {
        item.textContent = "";
    })

    const textSubmit= document.querySelector(".save_new_order.primary");
    textSubmit.textContent = "Aktualizuj";
    const formUpdateOne = document. querySelector("form.handler_form_add_new_order");
    formUpdateOne.addEventListener("submit",(e) => {
        e.preventDefault();
        name = name.value;
        fileNo = fileNo.value;
        material = material.value;
        count = count.value;
        color = color.value;
        project = project.value;
        model = model.value;

        fetch(`/updateOrder/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name, fileNo, material, count, color, project, model
            }),
            headers: {
                "Content-Type": "application/json"
              },
        }).then(() => {
            location.href = "/showOrders";
        })
    })

}
