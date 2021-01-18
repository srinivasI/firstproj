import React, { useState } from 'react';
import './Formex.css';
const Hookex = (props) => {
    return (
        <><h2>{props.myname}</h2><Headline /></>
    );
};

const Headline = () => {
    const [greeting, setGreeting] = useState(
        'Hello Srinivas'
    );

    const handleChange = event => setGreeting(event.target.value);

    return (
        <div>
            <h1>{greeting}</h1>

            <input type="text" value={greeting} onChange={handleChange} />
        </div>
    );
};

export default Hookex;