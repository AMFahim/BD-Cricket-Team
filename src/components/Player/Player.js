import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';
import {Card} from "react-bootstrap";

const Player = (props) => {
  const {name, salary, image} = props.player;

  const handleAddPlayer = props.handleAddPlayer;
  return (
  <div className="player">
      <Card style={{ width: '18rem' }} className="justify-content-center">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>Name: {name}</Card.Title>
    <Card.Text>
      Salary: {salary}
    </Card.Text>
    <button onClick={() => handleAddPlayer(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
  </Card.Body>
</Card>
  </div>
  );
};

export default Player;


 // <div className="player">
    //   <img src={image} alt=""/>
    //   <h3>Name: {name}</h3>
    //   <p>Salary: {salary}</p>
    //   <button>Add Player</button>
    // </div>

     {/* <Button variant="primary">Go somewhere</Button> */}