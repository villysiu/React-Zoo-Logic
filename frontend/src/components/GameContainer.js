import {Container, Row, Col }  from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const GameContainer=()=>{
   
    // console.log(games)
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={2}> </Col>
                <Col xs={12} md={8}>
                    
                <div align="center">
                    <Outlet />
                </div>
                </Col>     
                <Col xs={12} md={2}></Col>
            </Row>
        </Container>
        
  );
}


export default GameContainer