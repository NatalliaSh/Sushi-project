const LSUserIDKey = 'uid';

export const localStorageHandler = (user) => {
  const userID = user.uid;
  const users = JSON.parse(localStorage.getItem(LSUserIDKey) || '[]');
  const isUnique = !users.some((uid) => {
    const id = Object.keys(uid)[0];
    return id === userID;
  });
  if (isUnique) {
    const user = { [userID]: { backet: '' } };
    users.push(user);
  }
  localStorage.setItem(LSUserIDKey, JSON.stringify(users));
};
