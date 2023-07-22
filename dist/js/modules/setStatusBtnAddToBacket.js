function setStatusBtnAddToBacket() {
  const nodeListOfPlusBtnInBacket = document.querySelectorAll('#plusBtn[data-productid]');

  if (nodeListOfPlusBtnInBacket.length === 0) {
    const nodeListOfAddToBacketBtn = document.querySelectorAll(`#addToBacketBtn[data-producid]`);
    nodeListOfAddToBacketBtn.forEach((element) => {
      const parent = element.parentElement;
      const wantBtn = parent.previousElementSibling;
      if (!wantBtn.classList.contains('active')) {
        wantBtn.classList.add('active');
        parent.classList.remove('active');
      }
      const input = parent.querySelector('input');
      input.value = 1;

      const span = element.querySelector('span');
      span.innerText = '';
      if (element.classList.contains('green')) {
        element.classList.remove('green');
      }
    });
    return;
  }

  nodeListOfPlusBtnInBacket.forEach((element) => {
    const inputValue = parseInt(element.previousElementSibling.value);
    const attrValue = element.getAttribute('data-productid');
    const nodeListOfAddToBacketBtn = document.querySelectorAll(`#addToBacketBtn[data-producid=${attrValue}]`);

    nodeListOfAddToBacketBtn.forEach((element) => {
      const parent = element.parentElement;
      const wantBtn = parent.previousElementSibling;
      const input = parent.querySelector('input');
      const span = element.querySelector('span');

      wantBtn.classList.remove('active');
      parent.classList.add('active');

      input.value = inputValue;

      span.innerText = `х${inputValue}`;
      element.classList.add('green');
    });
  });
}

function changeBtnAddToBacketIFRemoveFromBacket(id) {
  const nodeListOfAddToBacketBtn = document.querySelectorAll(`#addToBacketBtn[data-producid=${id}]`);
  nodeListOfAddToBacketBtn.forEach((element) => {
    const parent = element.parentElement;
    const wantBtn = parent.previousElementSibling;
    if (!wantBtn.classList.contains('active')) {
      wantBtn.classList.add('active');
      parent.classList.remove('active');
    }
    const input = parent.querySelector('input');
    input.value = 1;

    const span = element.querySelector('span');
    span.innerText = '';
    if (element.classList.contains('green')) {
      element.classList.remove('green');
    }
  });
}

export { setStatusBtnAddToBacket, changeBtnAddToBacketIFRemoveFromBacket };
