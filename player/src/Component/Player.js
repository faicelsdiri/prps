import {Card,CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Player ({imgSrc,name,team,nationality,jerseyNumber,age}) {
    return ( 
    <>  
        <CardGroup >
            <Card style={{textAlign:'center'}}>
                <Card.Img variant="top" src={imgSrc} style={{width: '200px', height: '150px'}}/>
                <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text> {team} </Card.Text>
                <Card.Text> {nationality} </Card.Text>
                <Card.Text> {jerseyNumber} </Card.Text>
                <Card.Text> {age} </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
     );}
 
                                        //  defaultProps
     Player.defaultProps= {
        name: 'faicel',
        team :'faicel' ,
        nationality : 'faicel' ,
        jerseyNumber :'00'  ,
        age :    '30'  ,
        imgSrc:'**'
     }

export default Player ;