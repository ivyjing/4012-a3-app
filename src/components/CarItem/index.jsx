import './styles.css';
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import PetsOrderContext from '../../context/petsOrderContext';
import {useContext} from 'react';

export const PetItem = (props) => {

    const {image, year, name, price, type, company} = props;

    const globalState = useContext(PetsOrderContext);

    const addPetToCart = () =>{

        const pet = {
            year,
            name,
            image,
            company,
            type,
            price
        }
        globalState.addPetToOrder(pet);
        console.log(globalState.order);
        alert("Car was added");
    }

    return (
        <div className="pet">
            <img className="pet-photo" src={image} alt={name + company + "photo"} />
            <Link to= {`/car/${year}`}><h1 className="pet-name"> { name } </h1></Link>
            <p className="pet-breed"> { company } </p>
            <p className="pet-age"> { price } $ </p>

            <Button text="Request Disabled" type="primary" isDisabled={false} action={addPetToCart} />

        </div>
    )


}