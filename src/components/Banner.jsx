import React from 'react';
import bgImg from '../assets/bg-shadow.png'
import bannerImg from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div className=' bg-cover bg-center mt-4  w-full h-[400px] rounded-2xl bg-black' style={{ backgroundImage: `url(${bgImg})` }}>
          <div className='flex flex-col justify-center mx-auto items-center leading-10 p-8'>
             <img src={bannerImg} alt=""  />
             <h2 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
             <p>Beyond Boundaries Beyond Limits</p>
              <div className='p-1 border-2 border-amber-300 rounded-2xl'> 
                 <button className='btn bg-amber-300 rounded-2xl text-black'>Claim Free Credit</button>
              </div>
          </div>
        </div>
        
    );
};

export default Banner;