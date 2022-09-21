# Expanding Card
------------------------------------------------------------------------------------------------
 Simple javascript web-component expandable panel which can be used as a coustom html element.
 ##### Demo:
**[Demo](https://uirajeev.github.io/Web-Component/Expanding-cards/index.html)**
**URL: https://uirajeev.github.io/Web-Component/Expanding-cards/index.html**
## How to use 
- Add `card-component.js` file into your `.html` file header
- Used simply as html element `<expanding-card></expanding-card>`

#### Example:
In your `.html` file `header` add below line.
```html
<script src="card-component.js"></script>
```

In your `.html` file `body` just add like balow.
```html
<expanding-card></expanding-card>
```

In your `.html` just before the closing of `body` tag.
```html
<script>
    const cards = [
        {
            title: 'Card 1',
            image: 'https://picsum.photos/800/500?random=2',
            text: 'Letraset sheets containing Lorem Ipsum passages',
        },
        {
            title: 'Card 1',
            image: 'https://picsum.photos/800/500?random=3',
            text: 'Letraset sheets containing Aldus PageMaker including versions of Lorem Ipsum.',
        },
    ]
    const expandCard = document.querySelector('expanding-card');
    // Init exapnd card
    expandCard.init(cards);
</script>
</body>
```

### Attributes supported :
Attribute name  | Value
------------- | -------------
`height`  | Value should be valid css height value e.g `100px`, `100%` or `100vh` etc.
`wight`  | Value should be valid css width value e.g `100px`, `100%` or `100vw` etc.
#### Example:
```html
<expanding-card height="480px" width="95vw"></expanding-card>
```

### Events :
Event name  | callback
------------- | -------------
`cardClicked`  | Called when user clicked on panel. It's emit a javascript custom event which contain index od selected panel.
#### Example:
```javascript
const expandCard = document.querySelector('expanding-card');
// event listner on active card changed
expandCard.addEventListener('cardClicked', (event) => {
    console.log(event.detail.index); // selected panel index
});
```

### Css  :
Expanding card support css variables for customise the theme. Define variable on root level and specify the css property

#### Example:
```css
:root {
  --expanding-card-display: flex;
   --expanding-card-margin: 0 auto;
   --expanding-card-item-radius: 10px;
}
```
**Variable suported by Expaned card:**
variable name  | default value
------------- | -------------
**card container variables**  | 
`--expanding-card-display`  | Default value `flex`. Use this variables to set container display.
`--expanding-card-margin`  | Default value `0 auto`. Use this variables to set container margin.
**card item variables**  | 
`--expanding-card-item-background`  | Default value `no-repeat center center/cover`. Use this variables to set item background.
`--expanding-card-item-color`  | Default value `black`. Use this variables to set card item color.
`--expanding-card-item-radius`  | Default value `20px`. Use this variables to set card item border radius.
`--expanding-card-item-cursor`  | Default value `pointer`. Use this variables to card set item cursor.
`--expanding-card-item-size`  | Default value `0.5`. Use this variables to set card item with.
`--expanding-card-item-margin`  | Default value `10px`. Use this variables to set margin between card items.
`--expanding-card-item-padding`  | Default value `10px`. Use this variables to set card item padding.
`--expanding-card-item-position`  | Default value `relative`. Use this variables to set card item position.
**expanded card variables**  | 
`--expanding-card-expanded-size`  | Default value `5`. Use this variables to set expanded card item width.
**card heading variables**  | 
`--expanding-card-heading-background`  | Default value `rgb(211 211 211 / 87%)`. Use this variables to set card heading background.
`--expanding-card-heading-shadow`  | Default value `0 0 16px 8px rgb(215 215 215)`. Use this variables to set card heading  shadow.
`--expanding-card-heading-radius`  | Default value `10px`. Use this variables to set expanded card heading radius.
`--expanding-card-heading-font`  | Default value `24px/36px Arial`. Use this variables to set expanded card heading font.
`--expanding-card-heading-position`  | Default value `absolute`. Use this variables to set expanded card heading position.
`--expanding-card-heading-padding`  | Default value `10px`. Use this variables to set expanded card heading padding.
`--expanding-card-heading-top`  | Default value `20px`. Use this variables to set expanded card heading position from top.
`--expanding-card-heading-left`  | Default value `20px`. Use this variables to set expanded card heading position from left.
`--expanding-card-heading-margin`  | Default value `0`. Use this variables to set expanded card heading margin.
**card text content variables**  | 
`--expanding-card-text-background`  | Default value `rgb(211 211 211 / 87%)`. Use this variables to set card text content background.
`--expanding-card-text-shadow`  | Default value `0 0 16px 8px rgb(215 215 215)`. Use this variables to set card text content shadow.
`--expanding-card-text-radius`  | Default value `10px`. Use this variables to set card text content radius.
`--expanding-card-text-font`  | Default value `6px/24px Arial`. Use this variables to set card text content font.
`--expanding-card-text-padding`  | Default value `10px`. Use this variables to set card text content padding.
`--expanding-card-text-position`  | Default value `absolute`. Use this variables to set card text content position.
`--expanding-card-text-bottom`  | Default value `20px`. Use this variables to set card text content position from bottom.
`--expanding-card-text-right`  | Default value `20px`. Use this variables to set card text content position from right.
`--expanding-card-text-left`  | Default value `20px`. Use this variables to set card text content position from left.
`--expanding-card-text-margin`  | Default value `0`. Use this variables to set card text content margin.
-----------------------------------------------------------------------------------------------------------
## MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)