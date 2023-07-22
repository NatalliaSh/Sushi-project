import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDjvZMyfD7Y1tDjAL7zBtq8-kSWS8_OkBg',
  authDomain: 'sushi-project-c02e5.firebaseapp.com',
  projectId: 'sushi-project-c02e5',
  storageBucket: 'sushi-project-c02e5.appspot.com',
  messagingSenderId: '601048973924',
  appId: '1:601048973924:web:47b9e172d42f2a4c055571',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createAccount = async (email, password, displayName) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName });
  await sendEmailVerification(auth.currentUser);
};

const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

const logout = () =>
  signOut(auth).then(() => {
    eventBus.dispatch(ACTIONS.logout);
  });

const getUser = () => {
  return new Promise((res) => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        res(user);
      } else {
        res(null);
      }
    });
  });
};

export { createAccount, login, logout, getUser };
