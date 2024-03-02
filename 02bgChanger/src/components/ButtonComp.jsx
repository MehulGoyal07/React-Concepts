import React, { useState } from 'react';

function ButtonComp({color}) {
    const[colour, setColour] = useState("#212121")
    return (
        <div>
            <button onClick={() => setColour(color)} className="outline-none px-5 py-1 rounded-full text-{color}-300 
            shadow-lg" 
        style={{backgroundColor: color}}>{color}</button>
        </div>
    );
}

export default ButtonComp;