import { dataBase } from '../modules/dataBase/dataBase.js';
import { productSpecificationData } from '../modules/dataBase/productSpecificationData.js';

export const getDataBase = () => {
  return new Promise((res) => {
    res(dataBase);
  });
};

export const getproductSpecificationData = () => {
  return new Promise((res) => {
    res(productSpecificationData);
  });
};
