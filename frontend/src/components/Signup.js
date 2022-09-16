import { useState, useRef } from 'react'
import {Button, Form } from 'react-bootstrap'
import { signup } from './actions'
const Signup=({setToggleLogin, setCurrUser})=>{
    const formRef=useRef()
    const [errorMsg, setErrorMsg]=useState(null)
    const handleClick=(e)=>{
        e.preventDefault();
        setToggleLogin(prev=>!prev)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(formRef.current)
        const {email, username, password}=Object.fromEntries(formData)
        
        signup({user: { email: email, username: username, password: password }}, setCurrUser, setErrorMsg, )
        e.target.reset()
    }
    return (
        <div>
            <h3 align="center">Signup</h3>
            <div className='text-danger'>{errorMsg}</div>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
            <div>
                <br/>
                Already registered, <a href="#signup" onClick={handleClick} >Login</a> here.
            </div>
        </div>
    )
}
export default Signup