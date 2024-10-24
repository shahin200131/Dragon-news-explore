import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const Authcontext = createContext(null);

const Auth = getAuth(app)
const Authproviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth,email,password);
    }

    const logOUt = () => {
        setLoading(true);
        return signOut(Auth);
    }

    useEffect(() => {
        const unSubscibe = onAuthStateChanged(Auth,currentUser => {
            console.log('user in auth state changed ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscibe();
        }
    },[])
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth,email,password);
    }

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOUt,
    }
    return (
        <Authcontext.Provider value={AuthInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authproviders;