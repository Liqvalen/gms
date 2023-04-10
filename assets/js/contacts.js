// window.addEventListener('DOMContentLoaded', () => {
//     window.addEventListener('scroll', showModalByScroll)
//     const forms = document.querySelectorAll('form')
//     const massage = {
//         loading: 'assets/images/spinner.svg',
//         success: 'Спасибо! мы скоро с вами свяжемся',
//         failer: 'Что-то пошло не так...'
//     }
//     forms.forEach(item =>{
//         postData(item)
//     })
//     function postData(form){
//         form.addEventListener('submit', (e) =>{
//             e.preventDefault()
//             const statusMassage = document.createElement('img')
//             statusMassage.src = massage.loading
//             statusMassage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `
//             form.append(statusMassage)
//             form.insertAdjacentElement('afterend', statusMassage)

//             const formData = new FormData(form)
//             const object = {}
//             formData.forEach(function(value, key){
//                 object[key] = value
//             })
//             fetch('server.php', {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }, 
//                 body: JSON.stringify(object)
//             })
//             .then(data => data.text())
//             .then(data => {
//                 console.log(data);
//                 showThanksModal(massage.success)
//                 statusMassage.remove()
//             }).catch(() => {
//                 showThanksModal(massage.failer)
//             }).finally(() => {
//                 form.reset()
//             })
//         })
//     }
//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog')
//         prevModalDialog.classList.add('hide')
//         openModal()
//         const thanksModal = document.createElement('div')
//         thanksModal.classList.add('modal__dialog')
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div> 
//             </div>
//         `
//         document.querySelector('.modal').append(thanksModal)
//         setTimeout(() => {
//             thanksModal.remove()
//             prevModalDialog.classList.add('show')
//             prevModalDialog.classList.remove('hide')
//             closeModal()
//         }, 4000)
//     }
// })