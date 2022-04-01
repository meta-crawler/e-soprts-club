import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h2 className='login-text'>LOGIN</h2>
                    <div className='content-style'>
                        <input type="text" name="" id=""  placeholder='User name' className='user-text' />
                        <input type="password" name="" id=""  placeholder='password' className='user-text' />
                        <Link as={Link} to='/register' >Please Register</Link>
                        <button className='submit-btn'>Submit</button>
                    </div>


                </div>
            </form>
            </div>
           
        </div>
    );
};

export default Login;