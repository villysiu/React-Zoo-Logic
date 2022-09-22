import {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import { getAllScore } from './actions'
const Score =()=>{
    const [scores, setScores]=useState()

    useEffect(()=>{
        getAllScore(setScores)
    },[setScores])
    
    console.log(scores)
   
    if(!scores)
        return <div>Loading</div>

    return (

        <Container>
            <Row >
                <table border="1">
                    <thead><tr><th>Player</th><th>Level</th></tr></thead>
                    <tbody>
                {scores.map(score=><tr key={score.id} ><td>{score.username}</td><td>{score.level}</td></tr>)}
                </tbody>
                
                </table>
            </Row>
        </Container>

    )
}
export default Score