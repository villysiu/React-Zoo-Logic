import {Button, Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import { login } from './actions'
const Login=({setToggleLogin, setCurrUser})=>{
    const formRef=useRef()
    const [errorMsg, setErrorMsg]=useState(null)
    const handleClick=(e)=>{
        e.preventDefault();
        setToggleLogin(prev=>!prev)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(formRef.current)
        const {email, password}=Object.fromEntries(formData)
        
        login({user: { email: email, password: password }}, setCurrUser, setErrorMsg)
        e.target.reset()

    }
    return (
        <div>
            <h3 align="center">Welcome back! </h3>
            <div className="text-danger">{errorMsg}</div>
            <Form onSubmit={handleSubmit} ref={formRef} >

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <br/>
                Not registered yet, <a href="#login" onClick={handleClick} >Signup</a>  here
            </div>
        </div>
    )
}
export default Login
