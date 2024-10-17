const admin = require('firebase-admin');
const serviceAccount = require('/Users/mzr/code/secret_tflstationclosurenotifier/tflstationclosurenotifier-firebase-adminsdk-3axk1-a1fece699a.json');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Send a notification
const message = {
  notification: {
    title: 'Notifire',
    body: 'dupa hehe',
  },
  //token: 'DEVICE_FCM_TOKEN', // FCM token of the target device
  token: 'emSDJ96jSdWeD_mUHQFofU:APA91bGYB5hRiJMkmMKmzv_JcpYTqqAaH9m2NkINjQS_6wgvSDq80XjmL9b0xw8VgFwsamkXDEmmgNQ--Gz_QCzewH3bAtFugeEvS5OTD_M-SZ_nFUoap0g5MciG4pOZ5RXqk5yAy_sT', // FCM token of the target device
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
