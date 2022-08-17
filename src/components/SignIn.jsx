import React from 'react'
///// imports for Firebase \\\\\
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../firebase'
///// npm i react-google-button \\\\\
import GoogleButton from 'react-google-button'

const style = {
    wrapper: `flex justlfy-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default SignIn