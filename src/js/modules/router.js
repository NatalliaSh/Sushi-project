function getRoutes(productSpecificationData, dataForSelectedLocation) {
  const listOfSelfProduct = Object.keys(productSpecificationData);
  const listOfSelfProductPath = listOfSelfProduct.map((element) => '/' + element);

  const listOfCategories = dataForSelectedLocation.menuList;
  const listOfCategoriesPath = listOfCategories.map((element) => '/' + encodeURIComponent(element));

  const routes = {};
  listOfSelfProductPath.forEach((element) => (routes[element] = 'selfProductPage'));
  listOfCategoriesPath.forEach((element) => (routes[element] = 'category'));

  return routes;
}

export { getRoutes };
