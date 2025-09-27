import React, { use } from 'react';

import Cardplayer from './Cardplayer';


const Availableplayers = ({playersPromise,availBalance,setavailBalance,purchersplayers,setpurchersplayers}) => {
  
    const playerData = use (playersPromise)

    //console.log(playerData)
    return (
       
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3  gap-y-5 my-10'>
            {
                playerData.map(data => <Cardplayer data= {data} availBalance ={availBalance} setavailBalance={setavailBalance} purchersplayers= {purchersplayers} setpurchersplayers={setpurchersplayers}></Cardplayer>)
            }
        </div>
    );
};

export default Availableplayers;