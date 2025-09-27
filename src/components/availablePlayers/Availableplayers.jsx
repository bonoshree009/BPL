import React, { use } from 'react';

import user1 from "../../assets/user1.png";

import flag from "../../assets/report 1.png";


const Availableplayers = ({playersPromise}) => {
    
    const playerData = use (playersPromise)
    console.log(playerData)
    return (
       


        <div className='mx-auto grid grid-cols-1 md:grid-cols-3  gap-y-5 my-10'>
            {
                playerData.map(data => <div className=" w-96 shadow-sm  p-3 border-2  rounded-xl ">
  <figure> <img src={data.playerImg} alt="Shoes" className='mb-3 rounded-xl object-cover h-[300px] w-full'/></figure>
  <div className=" text-black leading-10">
    <h1 className="card-title"> <img src={user1} alt="" /> {data.playerName}</h1>
     <div className='flex justify-between items-center mb-3'>
        <p className='card-title'><img src={flag} alt="" /> {data.playerCountry}</p>
        <button className='btn bg-gray-200 text-black border-0'>{data.playingRole}</button>
     </div>

     {<hr className='text-gray-300'></hr>}

     <h1 className='font-bold'>Rating :{data.rating}</h1>
     <div className='flex justify-between items-center my-4'>
        <p className='font-bold'>{data.battingStyle}</p>
        <button className=' bg-white text-gray-500  px-2 text-[12px] border-gray-200 border-2 rounded-xl'>{data.bowlingStyle}</button>
     </div>

     <div className='flex justify-between items-center'>
        <p className='font-bold'> Price: {data.price}</p>
        <button className=' bg-white text-gray-500  px-2 text-[12px] border-gray-200 border-2 rounded-xl'>Choose Player</button>
     </div>
  </div>
</div>)
            }
           
         
        </div>




    );
};

export default Availableplayers;