export const withEmptyValueCheck = (value) => {
  return value
    ? value
    : {
        error: 'Поле не может быть пустым!',
      };
};

export const withEmailValueCheck = (value) => {
  if (value?.error) {
    return value;
  }

  return value.match(/[a-z0-9]+@[a-z]+\.\w{2,4}/)
    ? value
    : {
        error: 'Неверный формат email!',
      };
};

export const withPasswordLengthCheck = (value) => {
  if (value?.error) {
    return value;
  }

  return value.length > 5
    ? value
    : {
        error: 'Короткий пароль! Минимальная длина пароля 6 символов',
      };
};
