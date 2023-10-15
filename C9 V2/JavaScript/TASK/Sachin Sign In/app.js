import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyBYmkr6oOUzSLHICz-OCg2SqKt6ybvRpFo",
  authDomain: "login-authentication-f8aae.firebaseapp.com",
  projectId: "login-authentication-f8aae",
  storageBucket: "login-authentication-f8aae.appspot.com",
  messagingSenderId: "931146821381",
  appId: "1:931146821381:web:e0facfbf511179b718d16c",
};
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.3.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
//   console.log("dhdh", provider);

let google = document.getElementById("google");
let userData = document.getElementById("userData");
let logOut = document.getElementById("logOut");
//   logOut.style.display = "none";
google.addEventListener("click", () => {
  userData.style.display = "none";
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      displayDetails(user.displayName, user.email, user.photoURL);

      // console.log("data", user.displayName, user.email, user.photoURL);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  google.style.display = "none";
});
const displayDetails = (uName, email, img) => {
  // let userData=document.getElementById("userData");
  userData.style.display = "flex";
  logOut.style.display = "block";
  const image = document.createElement("img");
  image.src = `${img}`;
  const userName = document.createElement("p");
  userName.innerText = `${uName}`;
  const emailId = document.createElement("p");
  emailId.innerText = `${email}`;
  userData.append(image, userName, emailId);
  logOut.addEventListener("click", () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        userData.style.display = "none";
        logOut.style.display = "none";
        google.style.display = "block";
        userData.innerHTML = "";
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  });
};
