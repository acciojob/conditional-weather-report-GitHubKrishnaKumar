
import React from "react"


const WeatherDisplay = ({data})=>{
    const {temperature,conditions} = data;
  return (
  <div>
    <p>Temperature: {temperature}</p><span style={{color:temperature>20?"red":"blue"}}></span>

    <p>Conditions: {conditions}</p>
    </div>
)
}

export default WeatherDisplay
