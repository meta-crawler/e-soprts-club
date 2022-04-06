import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import useAuth from '../../Hook/UseAuth';
import img from '../../Images/ce72f6 (1).jpg'

import './Login.css'
const Login = () => {

    const [loginFromData , setLoginFromData] = useState()
    const { user,loginUser,authError ,isLoading} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleLoginSubmie = e => {
        loginUser(loginFromData.email, loginFromData.password)
        e.preventDefault()
    }



    return (
        <div className='main-login'>
            <div className='main-from'>
            <form action="" onSubmit={handleLoginSubmie}  className='form-start'>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>

                <div className='login-inner'>
                    <h2 className='login-text'> <div className='about'>
                                <div className='autoType'>
                                    <Typewriter

                                        options={{
                                            strings: [
                                                "Please Login",
                                               
                                            ],

                                            autoStart: true,
                                            loop: true,
                                            delay: 100,
                                        }}
                                    />
                                </div>
                               
                            </div></h2>
                    <div className='content-style'>
                        <input 
                        type="email"
                         name="email" 
                         id="" 
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
                        <Link as={Link} to='/register' style={{
                            textDecration:'none',color:'#d7a3d7', marginTop:'20px'
                        }} >Please Register</Link>
                        <button className='submit-btn'>Submit</button>
                    </div>


                </div>
            </form>
            {isLoading &&   <Spinner  animation="border" variant="primary" />}
            {/* {user?.email && <Alert>create user successfully </Alert> } */}
            {authError && <Alert>{authError}</Alert> }
            </div>
            {/* <img src={img} width='100%' alt="" /> */}

           
        </div>
    );
};

export default Login;