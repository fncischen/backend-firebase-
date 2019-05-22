var firebase = require("firebase-admin");

var serviceAccount = {
  "type": process.env.GOOGLE_APPLICATION_CREDENTIALS_type,
  "project_id": process.env.GOOGLE_APPLICATION_CREDENTIALS_project_id,
  "private_key_id": process.env.GOOGLE_APPLICATION_CREDENTIALS_private_key_id,
  "private_key": process.env.GOOGLE_APPLICATION_CREDENTIALS_private_key,
  "client_email": process.env.GOOGLE_APPLICATION_CREDENTIALS_client_email,
  "client_id": process.env.GOOGLE_APPLICATION_CREDENTIALS_client_id,
  "auth_uri": process.env.GOOGLE_APPLICATION_CREDENTIALS_auth_uri,
  "token_uri": process.env.GOOGLE_APPLICATION_CREDENTIALS_token_uri,
  "auth_provider_x509_cert_url": GOOGLE_APPLICATION_CREDENTIALS_auth_provider_x509_cert_url,
  "client_x509_cert_url": GOOGLE_APPLICATION_CREDENTIALS_client_x509_cert_url
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sleepfirebasetime.firebaseio.com"
});

export default firebase;