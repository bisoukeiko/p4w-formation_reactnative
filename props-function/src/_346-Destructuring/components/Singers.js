
// façon function

import React from "react";

// const Users = ({name, age}) => {

//     // const {name, age} = props;

//     return (
//         <div>
//             <p>Chanteur: </p>
//         </div>
//     )
// }


// façon class

class Users extends React.Component {
    render() {
        
        // Destructuring
        const {name, age} = this.props;


        return(
            <div>
                <p>Chanteur: {name} {age} ans</p>
            </div>
        )
    }
}

export default Users;