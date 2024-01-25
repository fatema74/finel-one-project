import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from 'firebase/auth'
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

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
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL:photo
    })
  }


  useEffect(() => {
    const unSubmit = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state chigne', currentUser);
      setUser(currentUser)
      setLoder(false);
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
    handleUpdatePhoto
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;