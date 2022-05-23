import React from 'react'
import { auth, provider } from './firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

const signInWithGoogle = ({setIsAuth}) => {
    signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem("isAuth",true)
        setIsAuth(true);
        navigate('/');
    })
}
    
    return (
        <div className='login-page'>
            <p className="heading">Sign In To Continue</p>
            <button className="explore-btn" onClick={signInWithGoogle}>Sign In</button>


        </div>
    )
}

export default Login