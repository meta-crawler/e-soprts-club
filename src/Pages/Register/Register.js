import React, { useState } from 'react';
import './Register.css'
import Typewriter from 'typewriter-effect';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import { Alert, Button, Modal, Spinner } from 'react-bootstrap';
import {
    
    faGoogle,
    faFacebook,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Register = () => {
    const [loginFromData , setLoginFromData] = useState()
    const { user,registerUser,authError ,modal,isLoading, googleSignIn ,handleFacebookSingIn, githubsignIn ,setModal} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleRegisterSubmit = e => {
        console.log('test');
        if(loginFromData.password !== loginFromData.password2){
            alert('your password did not match')
        }
        registerUser(loginFromData.email, loginFromData.password, loginFromData.name)
        e.preventDefault()
    } 
    const handleGoogleSingin= () => {
        googleSignIn()
    }
    const facebookLogin = () => {
        handleFacebookSingIn()
    }
    const handleGithub = () => {
        githubsignIn()

    }
    return (
        <div className='main-section'>
         <div className='bg-img'></div>
        <div className='login-main'>
           {!isLoading && <form onSubmit={handleRegisterSubmit} action="" className='login'>
            <Typewriter

                    options={{
                    strings: [
                        "Ready to Register",
                        
                    ],

                    autoStart: true,
                    loop: true,
                    delay: 20,
                    }}
                    />
           
               <input 
               type="text"
                name="name"
                 id="name"
                  placeholder='User name'
                   className='user-text' 
                   onBlur={handleOnBlur}
                   required
                   
                   />
                 <input 
                     type="email"
                      name="email" 
                      id="email" 
                      label="email"
                       placeholder='User email' 
                       className='user-text'
                       onBlur={handleOnBlur}
                       required />

                 <input 
                     type="password" 
                     name="password"
                      id=""  placeholder='password' className='user-text' 
                      label='password'
                      onBlur={handleOnBlur}
                      required/>
                 <input 
                     type="password" 
                     name="password2"
                      id=""  placeholder='ReType Your Password' 
                      className='user-text' 
                      label='password'
                      onBlur={handleOnBlur}
                      required/>
                      

                 <input type="submit" className='login-button' value="Register" />
                 <p>All Ready have a account? </p> 
                 <NavLink style={{color:'saddlebrown', textDecoration:'none'}} as={Link} to='/login'>please login !</NavLink> <br />
                <button className='login-icon' onClick={handleGoogleSingin}><FontAwesomeIcon  icon={faGoogle} /> </button>
                <button className='login-icon' onClick={facebookLogin}><FontAwesomeIcon  icon={faFacebook} /></button>
                <button className='login-icon' onClick={handleGithub} ><FontAwesomeIcon  icon={faGithub} /></button>
                
                
            </form>}
            {isLoading &&   <Spinner animation="border" variant="secondary" />}
            {user?.email && <div class="alert alert-success" role="alert">
  user create successfully!
</div>}
                {authError && [
  
  'danger',
  
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    {authError}
  </Alert>
))}
        </div>
        
     </div>
    );
};

export default Register;

// /*