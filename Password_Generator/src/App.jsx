import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  const [length , setlength]=useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  // UseRef hook -------------------------------------------

  const passwordref=useRef(null)
 
  const copyPassword=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator = useCallback(() =>{
   let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(number)
   str+="0123456789"
  if(char)
  str+="!@#$%^&*(){}[]~?><"

  for(let i=1;i<=length;i++){
    let chara=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(chara)
  }

  setpassword(pass)
},[length,number,char,setpassword])

useEffect(()=> {
passwordGenerator()
},[length,number,char,passwordGenerator])
  
return (
  <>

   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-black' >
   <h1 className='text-4xl text-center m-4'> Password Generator</h1>

   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
    type="text"
    value={password}
    className="outline-none w-full py-2 px-3"
    placeholder="Password"
    readOnly
    ref={passwordref}
     />

     <button  onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '> Copy</button>
      
   </div>

   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type='range' min={6} max={100} value={length} className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}} />
       
       <label>Length:{length}</label>
    </div>
    </div>

    <div className='flex items center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={number}
    id="numberInput"
    onChange={()=> {
      setnumber((prev) => !prev);
    }}
     />
     <label> Numbers</label>

     <input
    type="checkbox"
    defaultChecked={char}
    id="charInput"
    onChange={()=> {
      setchar((prev) => !prev);
    }}
     />
     <label> Characters</label>

   </div>

   </div>
   
   
   
  </>
)




}

export default App
