import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
//import "./NewPets.css";

const NewPets = () => {
    const [petName, setPetName]= useState("");
    const [ownerName, setOwnerName]= useState("");
    const [ownerEmail, setOwnerEmail]= useState("");

    const petNameHandler=(event)=>{
        console.log(event.target.value)
        setPetName(event.target.value);
    }
    const ownerNameHandler=(event)=>{
        setOwnerName(event.target.value);
    }
    const ownerEmailHandler=(event)=>{
        setOwnerEmail(event.target.value);
    }
    return (
        <React.Fragment>
        <Card>
            <form>
              <label>Pet Name</label>
              <input type="text" onChange={petNameHandler}></input>
              <label>Owner Name</label>
              <input type="text" onChange={ownerNameHandler}></input>
              <label>Owner Email</label>
              <input type="email" onChange={ownerEmailHandler}></input>
              <Button type="submit">CREAR</Button>
            </form>
        </Card>
        <p>Soy {ownerName} ({ownerEmail}) y mi mascota es {petName}</p>
        </React.Fragment>
    )
}

export default NewPets;
