// class
window.addEventListener('DOMContentLoaded', () =>{
    class MenuCard{
        constructor(img, altimg, href, name, bigTxt, parentSelector){
            this.img = img
            this.altimg = altimg
            this.href = href
            this.name = name
            this.bigTxt = bigTxt
            this.parent = document.querySelector(parentSelector)
        }
        render(){
            const element = document.createElement('div')
            // if(this.classes.length === 0){
            //     this.element = 'choose-category-item'
            //     element.classList.add(this.element)
            // }else{
            //     this.classes.forEach(className => element.classList.add(className))
            // }
            element.innerHTML = `
            <div class="choose-category-item">
                <a href=${this.href} class="item-link">
                    <div class="category-item-img"><img class="category-image"
                            src=${this.img} alt=${this.altimg}></div>
                    <div class=${this.bigTxt}>${this.name}</div>
                </a>
            </div>
            `;
            this.parent.append(element)
        }
    }
    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, href, name, bigTxt, parent}) => {
            new MenuCard(img, altimg, href, name, bigTxt, parent).render()
        })
    })
})