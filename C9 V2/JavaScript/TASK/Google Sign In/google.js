// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIjoQh5iiT-wnbLhxo6wjKV6QNLJGe2rU",
  authDomain: "fir-first-form.firebaseapp.com",
  projectId: "fir-first-form",
  storageBucket: "fir-first-form.appspot.com",
  messagingSenderId: "164849429426",
  appId: "1:164849429426:web:5366b69491d1fe487c92ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

let signIn = document.getElementById("sign-in");
let logout = document.getElementById("logout");
let gitSearch = document.getElementById("git-search");
let search = document.getElementById("search");
let repoList = document.getElementById("repoList");

signIn.addEventListener("click", () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      saveData(user.displayName, user.email, user.photoURL);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
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
  signIn.style.display = "none";
});

let saveData = (uName, uEmail, uPhoto) => {
  let detail = document.getElementById("details");
  detail.style.display = "flex";
  let name = document.createElement("p");
  name.innerText = `${uName}`;
  let email = document.createElement("p");
  email.innerText = `${uEmail}`;
  let photo = document.createElement("img");
  photo.src = `${uPhoto}`;
  detail.append(photo, name, email);

  logout.style.display = "block";
  logout.addEventListener("click", () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        detail.style.display = "none";
        detail.innerHTML = "";
        logout.style.display = "none";
        signIn.style.display = "block";
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  });
  gitSearch.style.display = "block";
  search.style.display = "block";
};

search.addEventListener("click", () => {
  let gitData = gitSearch.value;
  //console.log("data", gitData);

  fetch(`https://api.github.com/users/${gitData}`)
    .then((result) => result.json())
    .then((data) => {
      fetch(data.repos_url)
        .then((dataResult) => dataResult.json())
        .then((repo) => {
          //console.log("repo", repo);
          let finalData = repo.map((repoName) => repoName.name);
          for (let i of finalData) {
            console.log(i);
            let list = document.createElement("li");
            list.innerText = `${i}`;
            repoList.append(list);
          }
        });
    });
});
