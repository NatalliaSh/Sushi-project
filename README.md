## Responsive SPA website based on JS/HTML/CSS

## Requirements

- Node.js 12.18.x

## Setup

- npm install

## Run

- npm run start

## Used technologies

- Dynamic HTML, SCSS, JavaScript
- Components approach
- DOM API
- Fetch API
- Web Storage API (localStorage)
- History API
- Promise, async/await
- Regular expressions
- Firebase
- MockAPI

## Description

- SPA with dynamic change DOM based on the DOM API.\
  (dynamic loading of the page content, products cards and contact information in dependance of chosen city/address and URL)

- Implemented custom client routing based on the History API.

- Implemented authentication with Google Firebase.\
  (You can't add product into the basket or leave your feedback while you're not signed into your account)
- Used Web Storage API (localStorage) for storage data.\
  (Basket contents and your orders stores in localStorage.\
  So, when you logout and then login again, your basket will contain products that have been saved in localStorage under your account)

- Used Fetch API and async/await functions for getting and changing data.

- Feedbacks are stored in the MockAPI database.\
  You can also leave your feedback. It will be stored in the MockAPI database and when this webpage will be loaded again, your feedback will be displayed too.

- All forms on website have a little validation.

- Product cards on sliders are filtered by one of the following parameters: on sales, new or popular.

- If you have some products in your basket, the information about it is duplicated on product cards.

- If you submit an order, your basket on website and in localStorage will be cleared and your order will be saved in localStorage.

- Link with address in the footer contact information leads to the google map with this address.

#### Thank you for attention
