import React from 'react';
import pintura from '../img/pintura.jpg';

const TrabajosRalisamos = () => {

    return (
        <div style={{display:'flex'}}>
            <div>
                <img src={pintura} /> 
            </div>
            <div>
                <h4>Pintura</h4>
                <p>Realizamos trbajos de pintura interiores y esteriores con profecionales super calificados </p>
            </div>
        </div>
    )

}

export default TrabajosRalisamos;