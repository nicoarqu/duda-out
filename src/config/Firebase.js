import * as firebase from "firebase";
import "firebase/firestore";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const Firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const fireAuth = Firebase.auth();
fireAuth.languageCode = "es";
const db = firebase.firestore();
export { fireAuth, db };
