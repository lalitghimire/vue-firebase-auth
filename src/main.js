import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from "firebase/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";

var firebaseConfig = {
  apiKey: "AIzaSyBelXopLNIMKWvly-YEfWW9E5A04CYmqiM",
  authDomain: "vue-firebase-da227.firebaseapp.com",
  projectId: "vue-firebase-da227",
  storageBucket: "vue-firebase-da227.appspot.com",
  messagingSenderId: "176132921340",
  appId: "1:176132921340:web:4e4cb4ac8f7818f4084479",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
