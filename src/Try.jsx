import React, { useState } from "react";

function Try() {
const [color, setcolor] = useState("#FFFF")
function changecolor(event){
  setcolor(event.target.value);

}
  return(<div className="card">
    <h1>color picker</h1>
    <div className="color" style={{backgroundColor:color}}>
      <p>{color}</p>
    </div>
     <label className="here"> please select the color </label>
     <input type="color" value={color} onChange={changecolor} />

  </div>);
}

export default Try
