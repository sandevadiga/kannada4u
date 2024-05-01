// import serviceAccount from './file.json';

import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        type: 'service_account',
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace escaped newlines
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN
        
        // "type": "service_account",
        // "project_id": "kannada4u-v1",
        // "private_key_id": "ee7cd553ec8d329fa879a1f612882b1cae1dd53e",
        // "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDre6quO1OI1Peq\nE+rQ2eBxovDOf5EheKTLHDFH6kPlLWtDKbayrKb8zph0pkN6wJ1O9VOcrQulugvV\nZXq1Jr+9m1PLSlcsmR5DFlddnHcq91BnFXLFxmGYPTDjpyn2410xDtbOHUggXutM\nf7CnOuQHxyVol6b9bIW1OF4QROpVnfs0WQzDn5MvlBkXY+6ZPX9W1GV/xwc4b1p6\nfwTm1mPx2OHNqmJJTTWSg2L1j0QqzLkEV7qNkD3zMXPnGvmrFXlXwPpStc9It+a/\nDDRe14oHxYvFn4zVvoSKNnADTIDq5JnFuWKyQGkSFJOjhFR474XZZ52krYv/jvHI\nJfzOFzrjAgMBAAECggEACzI6D0aq1hqqG+AOjheN4FlK8caG8/x0eWPBxBWTXNYn\n/22ATkZ/Og3omcM9+hwmXpazfwOLRjnuThshFnPdMfqspUHHm0s8cRwi00SZNeXE\nYOJYLqccBM0EAg70o9Rznd2CwRILV96reVuo3oqiROxnDu4G9o2uXctsTYG5UpC1\nA92xzaN1AII1luKYgTZ9AOM0fbZ/6ib5Sn8KP4K80OUqcdYxI0rDNnhWfasHkDsw\nPTkHbrWFgMD07iKdsMWF/Guud0H3aeT9aRCZOujVNmKxkK4Bg6X0EiSvhSFcdpQs\nzOBj4eUYO+h35ENl967i7w25A7a4F7Y6jEUPqy124QKBgQD1pX8f7YfOI+Tg3eqk\nwalBx+STHLb9P0i8UmIakpgFM/+gHqvwZUkujSAt8tr8JGCS39lvgXE0Wq6tRJ6c\nZ0AQQyomwPdkIKz1e7DoHo3Nc1zN0gnUMcX02+oIOpWnA0Q+YjDgG8UTxUrYhW1S\n2RyvgJ5xFc0sn81v0nruGe6QrwKBgQD1aIILdA8CLEiEDBuuFsIQ6ptAZsKtk14z\nj5pjthfk2fKdc8ny60DyN2ArpOu30Z27okDJQuxpXiRSYCP6ZhNLWCYy9Ug441Og\nQJAEpqZmNxZCxKBiu60AECq/tOydcUS4od/cxblEyUecfsOuOolWriy+BYhRCxux\nu9yvYei+DQKBgH+ckCQIA6sFXpuq7YDV0pYHwCjkm/OH8sNSkQB481yQnNWT2YKz\nO4dhbTwxk621QC5M9+pDdonaKjB9G2DpCpDoM3eae2qaxv9oWIjdhpEawzVxTgXc\nLZh8vmGz/ZabzdIStI1YH9ObhLxi5F5Lx+ksiiL5TnNGOTVERPR4qESlAoGAOMGr\n2eREmFcPimKWgEPJLEpmD5X0jlpX3grnRQpXKllxsBKYcTMReTNvbYid74xuM3gK\nDcIJlTDtq5OKnp2+9pzzcLOjuWxx6c0kwb6dG2TAJD7/bPZEw4/5ow6/7oXExALE\nGHYuLAd1JW936DKnksGDnYsABOZRyGBPYMx/HH0CgYEAhy+fV0GlCaxOJFeXbUhs\nLqyGylrbpSGYI5hM5N/h6c+qwl17DlGzsyMbOER5dNmq17umgVgWtSNJkfHCw8pa\nd+id8wvInkz6NG78N62dVbJFRQU+fedBQlzgcatmyTo+VPiusCEklRex+Sz3j74N\nEblyz+ZnvOBpi7o29Kq+HMY=\n-----END PRIVATE KEY-----\n",
        // "client_email": "firebase-adminsdk-gii6j@kannada4u-v1.iam.gserviceaccount.com",
        // "client_id": "106616290285023974848",
        // "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        // "token_uri": "https://oauth2.googleapis.com/token",
        // "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        // "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gii6j%40kannada4u-v1.iam.gserviceaccount.com",
        // "universe_domain": "googleapis.com"
      }
      ),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default firebaseAdmin.firestore();
