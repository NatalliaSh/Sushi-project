## Responsive SPA website based on JS/HTML/CSS

## Requirements

- Node.js 12.18.x

## Setup

- npm install

## Run

- npm run start

## Used tools

- Dynamic HTML, SCSS, JavaScript
- Promise, fetch, async/await
- Regular expressions
- Web Storage API (localStorage)
- Firebase
- MockAPI
- History API
- Modules and partials

## Description

- This website is made as a SPA with dynamic loading of products cards and contact information depanding on chosen city/address and URL.\
  Here I have something like database with products and partners.\
  When the site is loading or you choose other city/address, or click on an internal link, web content and contact information is loading in dependence of chosen partner's address and URL path and query parameters.

- Site has an authentication.\
  You can't add product into the basket or leave your feedback while you're not signed into your account.\
  Authentication is made using Google Firebase.

- Basket contents and your orders stores in localStorage.\
  So, when you logout and then login again, your basket will contain products that have been saved in localStorage under your account.

- If you have some products in your basket, the information about it is duplicated on product cards.

- If you submit an order, your basket on website and in localStorage will be cleared and your order will be saved in localStorage.

- Feedbacks are stored in MockAPI database and dynamic load on the review page using fetch request.\
  You can also leave your feedback. It will be stored in MockAPI database and when this webpage will be load again, your feedback will be displayed too.

- All forms on website have a little validation.

- Product cards on sliders are filtered by one of the following parameters: on sales, new or popular.

- Routing has been realised using History API.

- Link with address in the footer contact information leads to the google map with this address.

#### Thank you for your attention
