import React from 'react'

const Card = ({result}) => {
    const {name, image, species, status, location} = result;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Especie: {species}</h3>
            <h4>Status: {status}</h4>
            <h4>locacion: {location?.name}</h4>
            <img src={image} alt={name} />
        </div>
    )
}

export default Card