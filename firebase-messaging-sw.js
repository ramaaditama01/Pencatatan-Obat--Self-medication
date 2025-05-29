
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({'apiKey': 'AIzaSyDVdQc4gMDZ3Arzz_ivXV-jteeXYu6Bj8I', 'authDomain': 'pengingat-minum-obat.firebaseapp.com', 'projectId': 'pengingat-minum-obat', 'storageBucket': 'pengingat-minum-obat.firebasestorage.app', 'messagingSenderId': '375047077058', 'appId': '1:375047077058:web:547438b3472aad76484f5b', 'measurementId': 'G-H0L3X1FT0W'});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // ganti sesuai file ikon kamu
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
