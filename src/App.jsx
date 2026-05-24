import axios from 'axios'
import { useEffect, useState } from 'react'
function App(){
  const[userdata,setData]=useState([])
  const[index,setIndex]=useState(1)
  const Api=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setData(response.data)
  }

  let a=<h2>Loading...</h2>
  if(userdata.length>0){

    a=userdata.map(function(elem,idx){
    return (
      <div className='card'>
       <a href={elem.url} target='_blank' rel='noreferrer'> <img src={elem.download_url}/></a>
        <p>{elem.author}</p>
      </div>
    
    )})
     } 
    useEffect(function(){
      Api()
    })
    const b=()=>{
     setIndex(index+1)
     setData([])

   }
   const c=()=>{
    if(index==1){
      index=1
    }
    else{
      setIndex(index-1)
      setData([])
    }

   }
  
   
return(
   <>
   <div className='top'>
    
      <div className='data'>
        {a}
      </div>

      <div className='bottom'>
        <button style={{ opacity:index==1?0.5:1, color:"black"}} onClick={c}>Prev</button>
        <p>Page:{index}</p>
        <button onClick={b}>Next</button>
      </div>
    
    </div> 
  </>
  )
}
export default App;