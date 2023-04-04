function countTotalPrice(currency = 'BYN') {
  const totalPriceNode = document.querySelector('#totalPrice');
  const nodeListOfSelfPrice = document.querySelectorAll('.substance__amountPrice--price');
  const arrOfSelfPriceNode = [...nodeListOfSelfPrice];
  const totalPrice = arrOfSelfPriceNode
    .reduce((acc, currentValue) => {
      return acc + parseFloat(currentValue.innerText);
    }, 0)
    .toFixed(2);
  totalPriceNode.innerText = `${totalPrice} ${currency}`;
}

export { countTotalPrice };
