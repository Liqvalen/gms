//class
window.addEventListener('DOMContentLoaded', () =>{
    class MenuCard{
        constructor(img, altimg, name, hrefMore, hrefBuy, price, parentSelector){
            this.img = img
            this.altimg = altimg
            this.name = name
            this.hrefMore = hrefMore
            this.hrefBuy = hrefBuy
            this.price = price
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
            <div class="catalog-item">
                <img src=${this.img} alt=${this.altimg} class="catalog-item-image">
                <div class="catalog-second-wrapper">
                    <p class="catalog-item-name">${this.name}</p>
                    <p class="catalog-item-price">Цена: <span>${this.price}</span></p>
                    <div class="catalog-item-more">
                        <i class="fas fa-info"></i>
                        <a href=${this.hrefMore} class="item-more-btn">Подробнее</a>
                    </div>
                    <div class="catalog-item-buy">
                        <i class="fas fa-shopping-cart"></i>
                        <a href=${this.hrefBuy} class="item-buy-btn">Купить</a>
                    </div>
                </div>
            </div>
            `;
            this.parent.append(element)
        }
    }
    axios.get('http://localhost:3000/menu')
    // parent problem
    .then(data => {
        data.data.forEach(({img, altimg, name, hrefMore, hrefBuy, price, parent}) => {
            new MenuCard(img, altimg, name, hrefMore, hrefBuy, price, parent).render()
        })
    })
    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res))
})