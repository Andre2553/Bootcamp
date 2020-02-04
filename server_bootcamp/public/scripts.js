const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
let a = 0
for(let card of cards){
    const id_card = card.getAttribute("id")
    card.addEventListener("click", function(){
     window.location.href= `/Courses/${id_card}`

    })
}
