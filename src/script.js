let menu = document.getElementById('menu')
let burguer = document.getElementById('burguer')
burguer.addEventListener('click', clickMenu)

function clickMenu() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        burguer.innerHTML ='<i class="fa-solid fa-bars"></i>'
    } else {
        menu.style.display = 'block'
        burguer.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
}