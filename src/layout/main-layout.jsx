import React from "react";

import "./MainModal.css"

export const Mainlayout = () => {

  const [ num, setNumber ] = React.useState( { name: "FirsName: khabib", age: "age: 19"  } );

  const add = () => {
    setNumber( ( p ) => {
      return { ...p, loacation: "location: surkhandaryo" }
    } );
  }
  const del = () => {
    setNumber( ( p ) => {
      return { ...p, region: "region: Denov" }
    } );
  }

  const teleg = () => {
    setNumber( ( p ) => {
      return { ...p, teleg: "teleg: @norboyev_oo4" }
    } );
  }

  return (
    <div className="container">
      <h1>{num.name}</h1>
      <p>{num.age}</p>
      <p>{num?.loacation}</p>
      <h3>{num?.region}</h3>
      <h4>{num?.teleg}</h4>
      <div className="addbutton">
        <button onClick={add}>add location</button>
        <button onClick={del}>add region</button>
        <button onClick={teleg}>add telegram</button>
      </div>
      {/* <button onClick={add}>+</button> */}
    </div>
  )
}