import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCagB4Piggbc2PJy3N632s6CZsrghxkoNA",
  authDomain: "movie-app-18b81.firebaseapp.com",
  projectId: "movie-app-18b81",
  storageBucket: "movie-app-18b81.appspot.com",
  messagingSenderId: "106129982111",
  appId: "1:106129982111:web:17a65518ed9d4190aa58aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
