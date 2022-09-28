import {useEffect, useState} from 'react'
import {Container, Row, Table} from 'react-bootstrap'
import { getAllScore } from './actions'
const Score =()=>{
    const [scores, setScores]=useState()

    useEffect(()=>{
        getAllScore(setScores)
    },[setScores])
   
    if(!scores)
        return <div>Loading</div>

    return (

        <Container>
            <Row >
                <Table className='scoreTable'>
                    <thead><tr height="20px"><th>Player</th><th>Level</th></tr></thead>
                    <tbody>
                        {scores.map(score=><tr height="auto" key={score.id} ><td>{score.username}</td><td>{score.level}</td></tr>)}
                    </tbody>
                
                </Table>
            </Row>
        </Container>
    )
}
export default Score