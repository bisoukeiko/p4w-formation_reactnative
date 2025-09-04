import React from "react";

const MyRef = React.forwardRef((props, ref) => {

    console.log(props);
    console.log(ref);

    return (
        <div>
            <input ref={ref} type='txte' />
            
        </div>
    );
})





export default MyRef;
