// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBDgkUSvrkHs5s1xlucsB5oRv38JmotrBw",
    authDomain: "jitsi-demo-7358d.firebaseapp.com",
    projectId: "jitsi-demo-7358d",
    storageBucket: "jitsi-demo-7358d.appspot.com",
    messagingSenderId: "201723747323",
    appId: "1:201723747323:web:912ee16bf6382d5bbf095e",
    measurementId: "G-8KK52X07SH"
  }

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.description,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
  return payload;
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});