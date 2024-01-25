// auth.js....
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { auth } from './firebase';

const auth = getAuth(app);

// Sign up function....
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};

// Log in function....
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

//log out function....
