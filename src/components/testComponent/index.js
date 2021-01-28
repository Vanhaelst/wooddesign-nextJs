import React, { useState } from 'react';

const Button = ({ disabled, onClick }) => {
    const [ clicked, setClicked ] = useState(0);

    const handleClicked = () => {
        if(onClick){
            onClick();
        }
        setClicked(clicked + 1);
    }
    return(
        <button
            onClick={handleClicked}
            disabled={disabled}
            data-testid="button"
        >
            Times clicked: {clicked}
        </button>
    )
}

export default Button;
