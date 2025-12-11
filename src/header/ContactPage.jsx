import React from "react";
import { useState } from "react";
import "./ContactPage.css";
import PageTransition from "../components/PageTransation";

function ContactPage() {

  const [contactUs , setContactUs] = useState({
    FirstName:"",
    SeconedName:"",
    PhoneNumber:"",
    Email:"",
    Address:"",
  })
  return (
   
      
      <PageTransition>
      <div className="flex" >

           <h1 style={{marginBottom:"30px"}}>Contact Us</h1>
        <label> FirstName:</label>
        <input value={contactUs.FirstName} onChange={(event)=>{
          setContactUs({...contactUs, FirstName: event.target.value})
        }} />

        <label>SeconedName:</label>
        <input value={contactUs.SeconedName} onChange={(event)=>{
          setContactUs({...contactUs , SeconedName:event.target.value})
        }} />

        <label>PhoneNumber:</label>
        <input value={contactUs.PhoneNumber} onChange={(event)=>{
          setContactUs({...contactUs , PhoneNumber:event.target.value})
        }} />

        <label>Email:</label>
        <input value={contactUs.Email} onChange={(event)=>{
          setContactUs({...contactUs , Email:event.target.value})
        }} />

        <label>Address:</label>
        <input value={contactUs.Address} onChange={(event)=>{
          setContactUs({...contactUs , Address: event.target.value })
        }} />

        <button className="btn"> Submit </button>
      </div>
      </PageTransition>
   
  );
}

export default ContactPage;
