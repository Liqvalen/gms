//Modal
window.addEventListener('DOMContentLoaded', () => {
    //Modal
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

    //Script to send data to the server
    const forms = document.querySelectorAll('form')
    const massage = {
        loading: 'assets/images/spinner.svg',
        success: 'Спасибо! мы скоро с вами свяжемся',
        failer: 'Что-то пошло не так...'
    }
    forms.forEach(item =>{
        bindPostData(item)
    })
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: data
        })
        return await res.json()
    }
    function bindPostData(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault()
                
            const statusMassage = document.createElement('img')
            statusMassage.src = massage.loading
            statusMassage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
            form.append(statusMassage)
            form.insertAdjacentElement('afterend', statusMassage)

            const formData = new FormData(form)

            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(massage.success)
                statusMassage.remove()
            }).catch(() => {
                showThanksModal(massage.failer)
            }).finally(() => {
                form.reset()
            })
        })
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('hide')
        openModal()

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div> 
            </div>
        `
        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal()
        }, 4000)
    }    
    // fetch('http://localhost:3000/menu')
    // .then(data => data.json())
    // .then(res => console.log(res))
})

