import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {

  apiKey: "AIzaSyAGm7izFJLhTnPpUEo6qkzAF1GfRme_fHw",

  authDomain: "practiceredux-beb5d.firebaseapp.com",

  projectId: "practiceredux-beb5d",

  storageBucket: "practiceredux-beb5d.appspot.com",

  messagingSenderId: "439305006426",

  appId: "1:439305006426:web:8316632f3907946c869763"

};



export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);