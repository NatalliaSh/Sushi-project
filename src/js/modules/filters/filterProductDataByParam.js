function filterProductDataByParam(productSpecificationData, parametr) {
  let newData = {};

  for (let key in productSpecificationData) {
    if (productSpecificationData[key][parametr]) {
      newData[key] = productSpecificationData[key];
    }
  }

  return newData;
}

export { filterProductDataByParam };
