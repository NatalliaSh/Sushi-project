function filterIDByCategories(dataForSelectedLocation, category = 'All') {
  const arrOfProductIDForSelectLocation = [];
  const allProducts = dataForSelectedLocation.products;
  const productsByCategori = allProducts[category];

  if (category === 'All' || !productsByCategori) {
    Object.values(allProducts).forEach((item) => arrOfProductIDForSelectLocation.push(item));
  } else {
    arrOfProductIDForSelectLocation.push(productsByCategori);
  }

  return arrOfProductIDForSelectLocation.flat();
}

export { filterIDByCategories };
