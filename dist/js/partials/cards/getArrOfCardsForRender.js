import { filterIDByCategories } from '../../modules/filters/filterIDByCategories.js';
import { filterProductDataByParam } from '../../modules/filters/filterProductDataByParam.js';

function getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, category, parametr) {
  let cardArr = [];
  const arrOfProductID = filterIDByCategories(dataForSelectedLocation, category);

  let productSpecificationData;

  if (parametr) {
    productSpecificationData = filterProductDataByParam(allProductSpecificationData, parametr);
  } else {
    productSpecificationData = allProductSpecificationData;
  }

  arrOfProductID.forEach((item) => {
    if (item in productSpecificationData) {
      //productSpecificationData[item].id = item;
      cardArr.push(productSpecificationData[item]);
    }
  });

  return cardArr;
}

export { getArrOfCardsForRender };
