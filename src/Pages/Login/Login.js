import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import './Login.css'
const Login = () => {
    return (
        <div>
            <div className='main-from'>
            <form action="" className='form-start'>
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
                        <input type="text" name="" id=""  placeholder='User name' className='user-text' />
                        <input type="password" name="" id=""  placeholder='password' className='user-text' />
                        <Link as={Link} to='/register' style={{
                            textDecration:'none',color:'#d7a3d7', marginTop:'20px'
                        }} >Please Register</Link>
                        <button className='submit-btn'>Submit</button>
                    </div>


                </div>
            </form>
            </div>
           
        </div>
    );
};

export default Login;