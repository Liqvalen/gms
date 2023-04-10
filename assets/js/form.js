const modal = document.querySelector('.modal'),
        btn = document.querySelectorAll('.btn-open-modal')

function openModal(){
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimer)
}
function closeModal(){
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
btn.forEach(item => {
    item.addEventListener('click', openModal)
})
modal.addEventListener('click', (e) =>{
    if(e.target === modal || e.target.getAttribute('data-close') == ''){
        closeModal()
    }
})
document.addEventListener('keydown', (e) =>{
    if(e.code === 'Escape' && modal.style.display === 'block'){
        closeModal()
    }
})
function showModalByScroll(){
    if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal()
        window.removeEventListener('scroll', showModalByScroll)
    }
}
window.addEventListener('scroll', showModalByScroll)
const modalTimer = setTimeout(openModal,3333333333333000)