import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,updateProfile ,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const [ user, setUser ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ authError, setAuthError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)
    const [admin, setAdmin] = useState(false)

    // observer user state
    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
                setIsLoading(false)
            }else{  
                setUser(null)
                setIsLoading(false)
            }
        });
        return () => unsubscribe;
    },[])

// google function 
    const googleSignIn = () =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then( result =>{
            setUser(result.user)
            // userDatabase(result.user.email, result.user.displayName, 'PUT')           
        })
        .catch( error =>{
            setAuthError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // register function
    const registerUser = ( email,password, name ) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
            const newUser = {email, displayName: name};
            setUser(newUser)
            updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
                setModal(true)
                
              }).catch((error) => {
                  setAuthError(error.massage)
               
              });
           
          })
          .catch((error) => {
            
            setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
    }

    // login function
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                // navigate(destination);
                setModal(true)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }  
    // logOut function
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            setAuthError( error.message )
          }).finally(() => setIsLoading(false))
    }


    return{
        user,
        isLoading,
        authError,
        modal,
        googleSignIn,
        logOut,
        loginUser,
        registerUser,
    }
}

export default useFirebase;



