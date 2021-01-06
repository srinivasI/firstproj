import React, { useState } from 'react';

const Hookex = (props) => {
    return (
        <div><h2>{props.myname}</h2><Headline /></div>
    );
};

const Headline = () => {
    const [greeting, setGreeting] = useState(
        'React hook state Component!'
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