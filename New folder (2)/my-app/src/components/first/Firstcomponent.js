import './first.css'
import React from 'react'

const Firstcomponent = (props) => {
  return( 
  <>
    <div className='first-1'>Firstcomponent</div>
    <h1>this is forth semester<br/> <br/> {props.abc}</h1>
    {console.log(props.abc)}
    <button onClick= {props.clik}>My button</button>
    </>
  
  )
    }

   export default Firstcomponent 