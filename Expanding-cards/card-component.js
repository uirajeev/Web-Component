class ExpandingCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._width = '90vw';
        this._height = '80vh';
        this._selectedIndex = 0;

        this._cards = [];
        this.renderDom();
    }

    handleCardOnClick(activeIndex) {
        const cards = this.getAllCards();
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === activeIndex) {
                card.classList.add('active');
                this._selectedIndex = activeIndex;
            }
        });
        const evt = new CustomEvent('cardClicked', { detail: { index: this._selectedIndex } });
        this.dispatchEvent(evt);
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

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'height':
                this._height = newValue;
                break;
            case 'width':
                this._width = newValue;
                break;
            default:
                null;
        }

        if(oldValue !== newValue) {
            this.init(this._cards);
        }
    }

    static get observedAttributes() { 
        return ['height', 'width'];
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

    renderDom() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                .expanding-card {
                    display: var(--expanding-card-display, flex);
                    margin:  var(--expanding-card-margin, 0 auto);
                }
                .expanding-card__item{
                    background:  var(--expanding-card-item-background, no-repeat center center/cover);
                    border-radius:  var(--expanding-card-item-radius, 20px); 
                    color: var(--expanding-card-item-color, black); 
                    cursor: var(--expanding-card-item-cursor, pointer); 
                    flex: var(--expanding-card-item-size, 0.5); 
                    margin: var(--expanding-card-item-margin, 10px);
                    padding: var(--expanding-card-item-padding, 10px);
                    position: var(--expanding-card-item-position, relative); 
                    transition: all 700ms ease-in;
                    overflow: hidden;
                }
                .expanding-card__item.active {
                    flex-grow: var(--expanding-card-expanded-size, 5);
                }
                .expanding-card h3 {
                    background: var(--expanding-card-heading-background, rgb(211 211 211 / 87%));
                    box-shadow: var(--expanding-card-heading-shadow, 0 0 16px 8px rgb(215 215 215));
                    border-radius: var(--expanding-card-heading-radius, 10px);
                    font: var(--expanding-card-heading-font, 24px/36px Arial);
                    position: var(--expanding-card-heading-position, absolute);
                    padding: var(--expanding-card-heading-padding, 10px);
                    top:  var(--expanding-card-heading-top, 20px);
                    left: var(--expanding-card-heading-left, 20px);
                    margin:  var(--expanding-card-heading-margin, 0);
                    opacity: 0;
                }

                .expanding-card p {
                    border-radius: var(--expanding-card-text-radius, 10px);
                    background: var(--expanding-card-text-background, rgb(211 211 211 / 87%));
                    box-shadow: var(--expanding-card-text-shadow, 0 0 16px 8px rgb(215 215 215));
                    font: var(--expanding-card-text-font, 16px/24px Arial);
                    padding: var(--expanding-card-text-padding, 10px);
                    position: var(--expanding-card-text-position, absolute);
                    bottom: var(--expanding-card-text-bottom, 20px);
                    right:  var(--expanding-card-text-right, 20px);
                    left: var(--expanding-card-text-left, 20px);
                    margin:  var(--expanding-card-text-margin, 0);
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
            <div class="expanding-card__item" ${this.objectToStyle({ backgroundImage: `url('${item.image}')` })} >
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
            `
        }).join('').toString();
    }
}

customElements.define('expanding-card', ExpandingCard);