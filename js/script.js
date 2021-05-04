window.onscroll = scroll
function scroll () {

    if(this.scrollY > 20) {
        document.getElementById('navbar').classList.add('sticky')
    } else {
        document.getElementById('navbar').classList.remove('sticky')
    }
}
document.querySelector(".menu-btn").addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("show-menu")
    document.querySelector(".menu-btn i").classList.toggle("show-menu")

})


