import React from 'react';

const Selectedplayers = ({purchersplayers,remove}) => {
    
     const eventhandle = (data) => {
        
        //console.log(data)
        remove(data)
     }
    return (
        <div className='my-10'>

         
          { purchersplayers.map((data) => (
            <div className='flex justify-between border-1 border-gray-200 p-3 items-center mb-5  rounded-xl'> 

            <div className='flex justify-center gap-2 items-center'> <img src={data.playerImg} alt="picture" className='mb-3 rounded-xl object-cover h-[50px] w-[50px]'/>
            <div className=''><h1 className='text-xl text-black font-bold'>{data.playerName}</h1>
            <p className='text-gray-500'>{data.battingStyle}</p></div>
            </div>
            <div onClick={() =>eventhandle(data)}><img src="https://i.ibb.co/FLpd3pTs/Vector.png" alt="" /></div>
               </div>

))}
         
             <button className='btn bg-amber-300 rounded-xl border-0'>Add More Player</button>
        </div>
    );
};

export default Selectedplayers;