// import React from 'react'

const Cars = ({ children, color}) => {

    // console.log(props);

    const colorInfo = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);

    if(children) {
        return (
            <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque: { children }</p>
                { colorInfo }         
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Pas de data !</p>
            </div>
        )
    }


}

export default Cars
