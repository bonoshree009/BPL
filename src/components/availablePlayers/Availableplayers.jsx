import React, { use } from 'react';

const Availableplayers = ({playersPromise}) => {
    
    const playerData = use (playersPromise)
    console.log(playerData)
    return (
        <div className='mx-auto'>
           <h1>hii</h1>
        </div>
    );
};

export default Availableplayers;