import React, { useState } from 'react';
import './Register.css'
import Typewriter from 'typewriter-effect';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import { Alert, Button, Modal, Spinner } from 'react-bootstrap';


const Register = () => {
    const [loginFromData , setLoginFromData] = useState()
    const { user,registerUser,authError ,modal,isLoading, setModal} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleRegisterSubmie = e => {
        if(loginFromData.password !== loginFromData.password2){
            alert('your password did not match')
        }
        registerUser(loginFromData.email, loginFromData.password)
        e.preventDefault()
    }
    return (
        <div>
               <div className='main-from'>
               <Modal show={modal}>
        <Modal.Header>
          <Modal.Title style={{color:'black'}}>Registration Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'black'}}>Hello Mr./Ms. {user?.displayName} You have successfully registered !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/">Go To Home</Link>
          </Button>
        </Modal.Footer>
      </Modal>
            { !isLoading && <form onSubmit={handleRegisterSubmie} action="" className='form-start'>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>

                <div className='login-inner'>
                    <h2 className='login-text'><div className='about'>
                                <div className='autoType'>
                                    <Typewriter

                                        options={{
                                            strings: [
                                                "Please Register",
                                               
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
                         id=""  placeholder='password' className='user-text' 
                         label='password'
                         onBlur={handleOnBlur}
                         required/>
                          <Link as={Link} to='/login' style={{
                            textDecration:'none',color:'#d7a3d7', marginTop:'20px'
                        }} >All ready Register!</Link>
                        <button className='submit-btn'>Submit</button>
                    </div>

                                   

                </div>
                <NavLink as={Link} to='/login'  >Already Registered ?</NavLink>
            </form>}
            {isLoading &&   <Spinner  animation="border" variant="primary" />}
            {/* {user?.email && <Alert>create user successfully </Alert> } */}
            {authError && <Alert>{authError}</Alert> }
            
            </div>
        </div>
    );
};

export default Register;