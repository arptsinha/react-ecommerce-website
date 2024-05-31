import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
//https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
import { auth } from "./firebase";
import logo from './logo.png';


function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase login
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        // firebase register
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //successfully created a new user with email and password
            // console.log(auth);
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src={logo}></img>
        </Link>

        <div class='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>

            <p>By singing-in you agree to Fansly's Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Noticeand our Interest-Based Ads Notice</p>

            <button onClick={register} className='login__registerButton'>Create your Fansly Account</button>
        </div>
    </div>
  )
}

export default Login