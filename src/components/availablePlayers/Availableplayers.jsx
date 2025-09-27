import React, { use } from 'react';

import Cardplayer from './Cardplayer';


const Availableplayers = ({playersPromise}) => {
    
    const playerData = use (playersPromise)

    //console.log(playerData)
    return (
       
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3  gap-y-5 my-10'>
            {
                playerData.map(data => <Cardplayer data= {data}></Cardplayer>)
            }
        </div>
    );
};

export default Availableplayers;