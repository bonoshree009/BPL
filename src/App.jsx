import { Suspense } from 'react'
import './App.css'
import navImg from "./assets/logo.png"
import Availableplayers from './components/availablePlayers/Availableplayers'
import Selectedplayers from './components/availablePlayers/selectedPlayers/Selectedplayers'
import Banner from './components/Banner'

 const fetchPlayers = async() =>{
    const res = await fetch("/public/players.json")
    return res.json()
}
function App() {
const playersPromise = fetchPlayers()

  return (
    <>
      <div className="navbar flex items-center justify-between">
  <div className="flex-1"> <img src={navImg} alt="" /></div>
  <div className="flex-none">
   <button className='btn bg-amber-300 rounded-xl border-0'><span >60000000</span><span >Coin </span></button>
  </div>
</div>
<Banner></Banner>

 <Suspense fallback={<h1>Data Loading</h1>}><Availableplayers  playersPromise={ playersPromise}> </Availableplayers> </Suspense>

{/* <Selectedplayers></Selectedplayers> */}
    </>
  )
}

export default App
