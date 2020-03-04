import React, { useState } from 'react';

const Helloworld = () => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active);
    }

    return(
        <div>
            <button onClick={handleClick}>Ocultar texto</button>
            {
                active && <h1>Hola mundo</h1>
            }
        </div>
    );
}

export default Helloworld;