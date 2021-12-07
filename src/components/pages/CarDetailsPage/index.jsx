
import {useParams} from 'react-router-dom';
import{useContext, useEffect, useState} from 'react';
import "./styles.css";
import PetsOrderContext from '../../../context/petsOrderContext';


export const CarDetailsPage = (props) => {
    const {year} =useParams();

    const [pet, setPet] = useState({});

    const globalState = useContext(PetsOrderContext);

     useEffect (() => {
        const pet = globalState.pets.find(
            (pet) => pet.year.stringValue === year
        );
        setPet(pet);

    }, [])

    if (pet){

    return (
        <div className = "pets-page">
            <h1 className="pets-title"> {pet.name?.stringValue}</h1>
            <img src={pet.image?.stringValue} alt="car photo"  />
            <h2>Long description: </h2>
            <h3 className="car-des"> {pet.carType?.stringValue}</h3>

        </div>
    )} else{
        return <p>No car with this id</p>

    }

}