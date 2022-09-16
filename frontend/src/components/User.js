import {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup'

const User=({setCurrUser})=>{
    const [toggleLogin, setToggleLogin]=useState(true)
    
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={3}> </Col>
                <Col xs={12} md={6}>
                    
                    {toggleLogin? <Login setToggleLogin={setToggleLogin} setCurrUser={setCurrUser} /> 
                    : <Signup setToggleLogin={setToggleLogin} setCurrUser={setCurrUser} />}
                </Col>     
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}
export default User