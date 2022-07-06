var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var Container = document.querySelector('.container')

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    Container.classList.toggle("large-container");
}