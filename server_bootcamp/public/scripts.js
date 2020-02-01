const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
let a = 0
for(let card of cards){
    const id_card = card.getAttribute("id")
    card.addEventListener("click", function(){
       modalOverlay.classList.add('active')
       modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${id_card}`

    })
}
document.querySelector('.close_modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src=``

})
document.querySelector('.maximize_modal').addEventListener('click', function(){
    
    if(a==0){
        modal.classList.add('maximize')
        a++
    }
    else{
        modal.classList.remove('maximize') 
        a=0
    }
    
       
    
})