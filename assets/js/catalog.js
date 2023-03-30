// class
window.addEventListener('DOMContentLoaded', () =>{
    class MenuCard{
        constructor(src, alt, name, href, parentSelector, ...bigTxt){
            this.src = src
            this.alt = alt
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
                            src=${this.src} alt=${this.alt}></div>
                    <div class=${this.bigTxt}>${this.name}</div>
                </a>
            </div>
            `;
            this.parent.append(element)
        }
    }
    new MenuCard(
        'assets/images/catalog/img-1.png',
        'Индикаторы',
        'Индикаторы',
        'catalog-pages/indicatory.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-2.png',
        'Кислоты',
        'Кислоты',
        'catalog-pages/kisloty.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-3.png',
        'Пищевая химия для производств',
        'Пищевая химия для производств',
        'catalog-pages/pishchevaya_himiya_dlya_proizvodstv.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-lowercaseName'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-4.png',
        'Стандарт-титры',
        'Стандарт-титры',
        'catalog-pages/standart-titry.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-5.png',
        'Техническая химия',
        'Техническая химия',
        'catalog-pages/tex-ximiya.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-6.png',
        'Фармацевтическая химия и пищевые добавки',
        'Фармацевтическая химия и пищевые добавки',
        'catalog-pages/far-pish-dobadky.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-lowercaseName'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-7.png',
        'Фильтровальная и индикаторная бумага',
        'Фильтровальная и индикаторная бумага',
        'catalog-pages/fil-ind-bumaga.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-lowercaseName'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-8.png',
        'Химические реактивы',
        'Химические реактивы',
        'catalog-pages/xim-realtivy.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
    new MenuCard(
        'assets/images/catalog/img-9.png',
        'Химия ГСО',
        'Химия ГСО',
        'catalog-pages/ximiya-gso.html',
        '.dirictory .container .choose-category-images .choose-categories-items',
        'category-item-name'
    ).render()
})