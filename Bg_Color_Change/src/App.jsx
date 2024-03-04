import { useState } from 'react'

function App() {
  const [color,setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 

        <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"red"}} > Red </button> 

        <button onClick={()=> setColor("Green")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"Green"}} > Green </button> 

        <button onClick={()=> setColor("Orange")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"Orange"}} > Orange </button> 

        <button onClick={()=> setColor("Yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"Yellow"}} > Yellow </button> 

        <button onClick={()=> setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"purple"}} > purple </button> 

        <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg ' style= {{backgroundColor:"pink"}} > pink </button> 
        
         </div>
          </div>

       
    </div>
  )
}

export default App
