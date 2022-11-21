import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXXmZu0bHNCwosu9xPR8WBbUlbYBbNHA4",
  authDomain: "serviz-52296.firebaseapp.com",
  projectId: "serviz-52296",
  storageBucket: "serviz-52296.appspot.com",
  messagingSenderId: "827323694886",
  appId: "1:827323694886:web:65ada2253a8619d1084be7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;
