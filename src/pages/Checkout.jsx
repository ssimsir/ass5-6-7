import React from 'react'
import NavBar from '../components/NavBar'
import CheckoutPage from '../components/checkout/CheckoutPage'
import { Button } from "react-bootstrap";

const Checkout = () => {
  return (
    <div>
      <NavBar />
      
      
      <div style={{border:"2px solid red", width:"40vw", minWidth:"300px", margin:"auto", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{color:"red"}}>Checkout Page</h1>
      <Button variant='warning'>Hide Product Bar</Button>
      <CheckoutPage/>
      </div>
      
      </div>
  )
}

export default Checkout