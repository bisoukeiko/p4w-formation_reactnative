// import React from 'react'

const Cars = ({ nom, color, year}) => {

    // console.log(props);

    const colorInfo = color ? (`Couleur: ${ color }`) : ('Couleur: Néant');

    if(nom) {
        return (
            <tr>
                <td>Marque: { nom }</td>
                <td>Age: { year }</td>
                <td>{ colorInfo }</td> 
            </tr>
        )
    } else {
        return null;
    }


}

export default Cars
