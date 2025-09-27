import { Suspense, useState } from 'react'
import './App.css'
import navImg from "./assets/logo.png"
import Availableplayers from './components/availablePlayers/Availableplayers'

import Banner from './components/Banner'
import Selectedplayers from './components/selectedPlayers/Selectedplayers'

 const fetchPlayers = async() =>{
    const res = await fetch("/public/players.json")
    return res.json()
}
function App() {
const playersPromise = fetchPlayers()
 const [toggle, settoggole] = useState (true)

  return (
    <>
      <div className="navbar flex items-center justify-between">
  <div className="flex-1"> <img src={navImg} alt="" /></div>
  <div className="flex-none">
   <button className='btn bg-amber-300 rounded-xl border-0'><span >60000000</span><span >Coin </span></button>
  </div>
</div>
<Banner></Banner>
<div className='flex justify-between items-center mx-auto'>
  <h1 className='text-black font-black text-xl'>Available Players</h1>
<div >
  <button onClick={()=>settoggole(true)} className={`text-black px-3 py-2 ${toggle === true ? "bg-amber-300" : "bg-white"} rounded-l-2xl border-1 border-gray-400 border-r-0 font-bold`}>Available</button>
  <button onClick={()=>settoggole(false)} className={`text-gray-500 px-3 py-2 ${toggle === false ? "bg-amber-300" : "bg-white"} rounded-r-2xl border-1 border-gray-400 border-l-0`}>Selected <span>(0)</span></button></div>
  </div>

{
  toggle === true? <Suspense fallback={<h1>Data Loading</h1>}>
    <Availableplayers  playersPromise={ playersPromise}> </Availableplayers> </Suspense> : <Selectedplayers></Selectedplayers>

}
  


 
    </>
  )
}

export default App
