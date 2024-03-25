import React, { useContext } from 'react'
import { context } from './MainContext' 

export default function ProductContext() {
   let p = useContext(context) 
  return (
    <div>
        <h1>THis is Product Component</h1>
        <h2>Product ----</h2>
        <h3>Name : {p.name}</h3>
        <h3>price : {p.price}</h3>
    </div>
  )
}
