import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const handleGoogleSignIn =() =>{

signInWithPopup(auth, googleProvider)
.then(result =>{
    const loggedInUser = result.user;
    console.log(loggedInUser);
    setUser(loggedInUser)
})
.catch(error =>{
    console.log(error);
})
}


const handleSignOut =() =>{
    signOut(auth)
    .then(result =>{
        setUser(null)
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
}


const handleGithubSignIn =() =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
    })
    .catch(error =>{
        console.log(error)
    })
}
    return (
        <div>

            {/* ternary operator for if user have signOut button will showed , if user have not logigined sign in button will show */}
            {
                user ? 
                <button onClick={handleSignOut}>Sign Out </button> :

   <>
     <button onClick={handleGoogleSignIn}>Sign with email</button>
    <button onClick ={handleGithubSignIn}>Github Login</button>
   </>
            }
            {user && <div>
              
              <h2>  User : {user.displayName}</h2>
              <p>Email : {user.email}</p>
              <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;