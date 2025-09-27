import { Suspense, useState } from 'react'
import './App.css'
import navImg from "./assets/logo.png"
import Availableplayers from './components/availablePlayers/Availableplayers'
import Banner from './components/Banner'
import Selectedplayers from './components/selectedPlayers/Selectedplayers'
  import { ToastContainer } from 'react-toastify';

 const fetchPlayers = async() =>{
    const res = await fetch("/public/players.json")
    return res.json()
}
const playersPromise = fetchPlayers()
function App() {

 const [toggle, settoggole] = useState (true)
 const [availBalance ,setavailBalance] = useState (60000000)
 const [purchersplayers,setpurchersplayers] = useState([])
 const remove = (player) =>{
           setavailBalance (availBalance + player.price)
const removeplayer = purchersplayers.filter(ply => ply.playerName !== player.playerName)
setpurchersplayers (removeplayer)
         
 }


  return (
    <>
      <div className="navbar flex items-center justify-between">
  <div className="flex-1"> <img src={navImg} alt="" /></div>
  <div className="flex-none">
   <button className='btn bg-white rounded-xl border-0 text-black'><span >{availBalance}</span> <span>Coin</span><img src="https://i.ibb.co/6Swdz1d/dollar-1.png" alt="" /></button>
  </div>
</div>
<Banner></Banner>
<div className='flex justify-between items-center mx-auto'>
  <h1 className='text-black font-black text-xl'>{toggle === true ? "Available Players" : `selected players(${purchersplayers.length} /6)`}</h1>
<div >
  <button onClick={()=>settoggole(true)} className={`text-black px-3 py-2 ${toggle === true ? "bg-amber-300" : "bg-white"} rounded-l-2xl border-1 border-gray-400 border-r-0 font-bold`}>Available</button>
  <button onClick={()=>settoggole(false)} className={`text-gray-500 px-3 py-2 ${toggle === false ? "bg-amber-300" : "bg-white"} rounded-r-2xl border-1 border-gray-400 border-l-0`}>Selected <span>{purchersplayers.length}</span></button></div>
  </div>

{
  toggle === true? <Suspense fallback={<h1 className='text-4xl text-black text-center font-bold'>Data Loading</h1>}>
    <Availableplayers  playersPromise={ playersPromise} availBalance= {availBalance} setavailBalance={setavailBalance} purchersplayers={purchersplayers} setpurchersplayers={setpurchersplayers} >
       </Availableplayers> </Suspense> : <Selectedplayers purchersplayers= {purchersplayers} remove ={remove} gotoAvail= {() =>{settoggole(true)}}> </Selectedplayers>

}
  

<ToastContainer/>
 
    </>
  )
}

export default App
