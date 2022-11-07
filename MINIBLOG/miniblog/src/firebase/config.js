// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCyk2BNZfXGe5yO1ZfYOTRS6VECubVRw1Q",
	authDomain: "miniblog-f73ac.firebaseapp.com",
	projectId: "miniblog-f73ac",
	storageBucket: "miniblog-f73ac.appspot.com",
	messagingSenderId: "456614506725",
	appId: "1:456614506725:web:f59176f9ed961493e8a40c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
