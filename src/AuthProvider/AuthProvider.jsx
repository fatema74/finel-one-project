import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const [user, setUser] = useState(null);

  const [loder, setLoder] = useState(true);

  
  
  const creatUser = (email, password) => {
    setLoder(true)
  return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoder(true)
    return signOut(auth)
  }


  const handleUpdatePhoto = (name, photo) => {
    setLoder(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL:photo
    })
  }


  useEffect(() => {
    const unSubmit = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state chigne', currentUser);
      setLoder(false);
      setUser(currentUser)
      
    })
    return () => {
      unSubmit()     
    }
  },[])


  const authInfo = {
    creatUser,
    loginUser,
    logOut,
    user,
    loder,
    handleUpdatePhoto,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;