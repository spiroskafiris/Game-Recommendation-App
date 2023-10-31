import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGZUdynkhXE7sSwML3OOg2ngEh3cMAPuI",
    authDomain: "gamerecommendationapp.firebaseapp.com",
    projectId: "gamerecommendationapp",
    storageBucket: "gamerecommendationapp.appspot.com",
    messagingSenderId: "839519231846",
    appId: "1:839519231846:web:35908c9a9b186494a872a7",
    // measurementId: "G-22HX5Z2BQK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log("asfgasgasg");
      window.location.ref = "http://localhost:3000/CategoriesSelector";
     
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("asfgasgasg");

})
})

// export const auth = getAuth();