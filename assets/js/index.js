//class
window.addEventListener('DOMContentLoaded', () =>{
    class MenuCard{
        constructor(src, alt, name, hrefMore, hrefBuy, price, parentSelector){
            this.src = src
            this.alt = alt
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
                <img src=${this.src} alt=${this.alt} class="catalog-item-image">
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
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
    new MenuCard(
        'assets/images/popul.png',
        'kaliy',
        'Калий йодистый',
        '#',
        '#',
        '2747 руб.',
        '.catalog .container .catalog-items'
    ).render()
})