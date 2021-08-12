import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-YGcPWB3tOhnRffxQofsPqizzf8DqKWs",
    authDomain: "eshop-db-21191.firebaseapp.com",
    projectId: "eshop-db-21191",
    storageBucket: "eshop-db-21191.appspot.com",
    messagingSenderId: "849618956446",
    appId: "1:849618956446:web:892292420cf72763424b8f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// auth with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;