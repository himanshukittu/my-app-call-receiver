import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBDgkUSvrkHs5s1xlucsB5oRv38JmotrBw",
    authDomain: "jitsi-demo-7358d.firebaseapp.com",
    databaseURL: "https://jitsi-demo-7358d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jitsi-demo-7358d",
    storageBucket: "jitsi-demo-7358d.appspot.com",
    messagingSenderId: "201723747323",
    appId: "1:201723747323:web:912ee16bf6382d5bbf095e",
    measurementId: "G-8KK52X07SH"
};

const initFirebase = () => {
    // if(!firebase.app.length){
        firebase.initializeApp(firebaseConfig);
    // }
}

initFirebase();
export {firebase};