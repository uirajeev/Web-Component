class ExpandingCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this._width = '90vw';
        this._height = '80vh';
        this._cards = [];
        this.renderDom();
    }

    handleCardOnClick(activeIndex) {
        const cards = this.getAllCards();
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === activeIndex) {
                card.classList.add('active');
            }
        });
    };

    init(cards) {
        this._cards = cards;
        this.removeListener();
        this.renderDom();
        this.addListener();
    }

    getAllCards() {
        return this.shadowRoot.querySelectorAll('.expanding-card__item');
    }

    addListener() {
        const cards = this.getAllCards();
        cards.forEach((card, index) => {
            card.addEventListener('click', this.handleCardOnClick.bind(this, index));
        });
    }

    removeListener() {
        const cards = this.getAllCards();
        cards.forEach((card) => {
            card.removeEventListener('click', this.handleCardOnClick);
        });
    }

    renderDom() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                .expanding-card {
                    display: flex;
                    margin: 0 auto;
                }
                .expanding-card__item{
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 20px; 
                    color: black; 
                    cursor: pointer; 
                    flex: 0.5; 
                    margin: 10px;
                    padding: 10px;
                    position: relative; 
                    transition: all 700ms ease-in;
                    overflow: hidden;
                }
                .expanding-card__item.active {
                    flex-grow: 5;
                }
                .expanding-card h3 {
                    background: rgb(211 211 211 / 87%);
                    box-shadow: 0 0 16px 8px rgb(215 215 215);
                    border-radius:10px;
                    font-size: 24px;
                    position: absolute;
                    padding: 10px;
                    top: 20px;
                    left: 20px;
                    margin: 0;
                    opacity: 0;
                }

                .expanding-card p {
                    border-radius:10px;
                    background: rgb(211 211 211 / 87%);
                    box-shadow: 0 0 16px 8px rgb(215 215 215);
                    font-size: 16px;
                    padding: 10px;
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    margin: 0;
                    opacity: 0;
                }
                .active p, .active h3 {
                    opacity: 1;
                }
            </style>
            <div class="expanding-card" style="width:${this._width}; height: ${this._height}">
                ${this.renderCard()}
            </div>
        `;
    }

    renderCard() {
        return this._cards.map((item) => { 
            const image = `style="background-image: ;"`; 
            return/*html*/`
            <div class="expanding-card__item" ${this.objectToStyle({backgroundImage: `url('${item.image}')`})} >
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
            `
        } ).join('').toString();
    }

    dashedCase(str) {
        return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }

    objectToStyle(obj) {
        const style = Object.keys(obj).reduce((style, item,) => {
           return `${style}${this.dashedCase(item)}: ${obj[item]};`;
        }, 'style="');

        return style + '"';
    }

    
}

customElements.define('expanding-card', ExpandingCard);