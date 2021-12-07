import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { useState } from "react";
export const NewCarPage = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const submitPet = async (formVals) => {
        const formattedData = {
            fields: {
                year: {
                    stringValue: formVals.year
                },
                company: {
                    stringValue: formVals.company
                },
                price: {
                    stringValue: formVals.price
                },
                name: {
                    stringValue: formVals.name
                },
                carType: {
                    stringValue: formVals.carType
                },
                image: {
                    stringValue: formVals.image
                },
                isSold: {
                    booleanValue: false
                },
        }
    }

    console.log(formVals, formattedData);
    try {
        const response = await fetch('https://firestore.googleapis.com/v1/projects/a3carapp/databases/(default)/documents/cars/',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formattedData)
        })
        history.push('/');
    } catch (error) {
        console.log("Error", error);
    }
    };

    return (
        <div className="cars-page">
            <form className="form-layout" onSubmit={handleSubmit(submitPet)}>
            <h2>Submit a new car: </h2>
            <br />

            <label htmlFor="carType"> Car description</label>
            <input 
                {...register("carType")}
                name="carType"
                required
            />

<label htmlFor="name"> Name </label>
            <input {...register("name")} name="name" required type="text"/>
            <label htmlFor="company">Company</label>
            <input
                {...register("company")}
                name="company"
                required
            />

            <label htmlFor="image">Image Url</label>
            <input
                {...register("image")}
                name="image"
                required
            />

<label htmlFor="price">Price</label>
            <input
                {...register("price")}
                name="price"
                required
            />

<label htmlFor="year">ID</label>
            <input
                {...register("year")}
                name="year"
                required
            />
            
<input type="submit" value="Submit Car"/>
<br />
            </form>
        )
        </div>
    );
};