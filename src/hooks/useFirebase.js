import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect } from "react";

initializeAuthentication();


const useFirebase=()=>{
    const [user, setUser] = useState({});
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
       .catch(error=>{
           setError(error.message)
       })
       .finally(()=> setIsLoading(false));
     
    }

    const logout =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
            setIsLoading(false);
        })
    },[])
    
    return{
        user,
        isLoading,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;