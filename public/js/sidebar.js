const btn_toogle = document.querySelector(".btn-toogle");
const sidebar = document.querySelector(".sidebar_content_wrapper");

btn_toogle.addEventListener("click", () => {
    sidebar.classList.toggle("active_btn_toogle")
})