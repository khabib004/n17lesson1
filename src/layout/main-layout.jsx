import React from "react";

import "./MainModal.css"

export const Mainlayout = () => {

  const [ num, setNumber ] = React.useState( { name: "khabib", age: 19 } );

  const add = () => {
    setNumber( ( p ) => {
      return { ...p, loacation: "toshkent" }
    } );
  }
  const del = () => {
    setNumber( ( p ) => {
      const obj = { ...p };
      delete obj?.loacation;
      return obj;
    } )
  }

  return (
    <div className="container">
      <h1>{num.name}</h1>
      <p>{num.age}</p>
      <p>{num?.loacation}</p>
      <div className="addbutton">
        <button onClick={add}>add</button>
        <button onClick={del}>delete</button>
      </div>
      {/* <button onClick={add}>+</button> */}
    </div>
  )
}