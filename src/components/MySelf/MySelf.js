import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h5>Me</h5>
            <p><small>House: {house}</small></p>
            <Special house={house} ></Special>
        </div>
    );
};

export default MySelf;