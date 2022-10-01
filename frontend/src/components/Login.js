import {Button, Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import { login } from './actions'
const Login=({setToggleLogin, setCurrUser, setCurrUserLevel})=>{
    const formRef=useRef()
    const [errorMsg, setErrorMsg]=useState(null)
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(formRef.current)
        const {email, password}=Object.fromEntries(formData)
        
        login({user: { email: email, password: password }}, setCurrUser, setErrorMsg, setCurrUserLevel)
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
            
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <br/>
                Not registered yet, <a href="#login" onClick={e=>setToggleLogin(prev=>!prev)} >Signup</a>  here
            </div>
            <br/><br/>
        </div>
    )
}
export default Login
