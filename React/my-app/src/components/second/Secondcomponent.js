import './second.css'
import React from 'react'
import { useState } from 'react'
const Secondcomponent = () => {

    // first defined below is a variable, second is the function
    // in useState the the variable save the value and function update the useState

    let [isPressed, handleIsPressed]=useState(0)
    function handleIsPressed(){
        isPressed=isPressed+1;
    }
  return (
    <div className = 'second-1'>Secondcomponent</div>
  )
}

export default Secondcomponent