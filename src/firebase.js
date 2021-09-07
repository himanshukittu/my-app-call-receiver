import firebase from 'firebase/app';
import 'firebase/messaging';
import axios from 'axios';
import 'firebase/database';
import functions from 'firebase-functions';

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

const vapidKey = 'BFIJTc3XNQBvpXjS5qEXwePrJzA_B8SZlxb1zeRb6ugzvaOM1PgrWNr7Jr0qwLFv4NyYqw1AF7_ZKSZRQytHgZg';
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// export const getToken = (setTokenFound) => {
//     return messaging.getToken({ vapidKey }).then((currentToken) => {
//         if (currentToken) {
//             console.log('current token for client: ', currentToken);
//             axios.post('http://localhost:3000/index/set_app_id', { payerId: 12345, clientId: currentToken })
//             .then(response => console.log(response))
//             .catch(err => console.log(err));
//             setTokenFound(true);
//             // Track the token -> client mapping, by sending to backend server
//             // show on the UI that permission is secured
//         } else {
//             console.log('No registration token available. Request permission to generate one.');
//             setTokenFound(false);
//             // shows on the UI that permission is required 
//         }
//     }).catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//         // catch error while creating client token
//     })
// };
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

export const onDBUpdateListener = () =>
    new Promise((resolve) => {
        functions.database.ref('/users').onWrite((payload) => {
            resolve(payload);
            console.log('smnthng written.....');
        });
        // dbRef.child("users").get().then((snapshot) => {
        //     if (snapshot.exists()) {
        //         console.log(snapshot.val());
        //         resolve(snapshot.val())
        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
});