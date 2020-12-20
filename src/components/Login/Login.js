import React, { useContext, useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [user,setUser]=useState({
        isSignedIn:false,
        name:'',
        email:'',
        img:''
    })

    const [loggedInUser,setLoggedInUser]=useContext(userContext)

    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            console.log(result)
            const {displayName,email,photoURL}=result.user;
            const newUser={
                isSignedIn:true,
                name:displayName,
                email:email,
                img:photoURL
            }
            setUser(newUser)
            setLoggedInUser(newUser)
            history.replace(from);
            console.log(newUser)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div>
        <div className="d-flex justify-content-center align-items-center">
           <div className="text-center">
           <div className="login-area text-center">
               <h3 className="mt-5">Login With Google</h3>
               <button className="loginButton " onClick={handleGoogleSignIn}>Continue With Google</button>
           </div> 
           </div>
       </div>
   </div>
    );
};

export default Login;