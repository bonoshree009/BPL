import './App.css'
import navImg from "./assets/logo.png"


function App() {


  return (
    <>
      <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src={navImg} alt="" />
    </a>
  </div>
  <div className="flex-none ">
   <button className='btn  '><span >60000000</span>
   <span >Coin </span></button>
   
  </div>
</div>
    </>
  )
}

export default App
