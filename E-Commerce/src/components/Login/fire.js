import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCBd-2UhOt9UxJJZy7ySn3t2ElqA9oFiAc",
    authDomain: "takeoff-login.firebaseapp.com",
    projectId: "takeoff-login",
    storageBucket: "takeoff-login.appspot.com",
    messagingSenderId: "482196353806",
    appId: "1:482196353806:web:620b6cbc7fbd31dc919d5f"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;