import React from 'react'
import "./AboutPage.css"
import PageTransition from '../components/PageTransation'
import { FaFacebook , FaLinkedin ,FaWhatsapp,FaTelegramPlane ,  FaGoogle } from "react-icons/fa";
import { FaYoutube ,FaGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";



function AboutPage() {
  return (
          <PageTransition>
    <div>



    <div className='header'>
    <h1>About Us</h1>
    <p>An e-commerce platform offering high-quality
        <br/>
         products and a seamless shopping experience.
         </p>
    </div>

    <div className='cont'>
      <div><img className='img_shooping'
       src="/img/shooping.jpg" alt="" />
         </div>

         <div>
          <h1> Who We Are</h1>
          <p>
            Who We Are
We are an e-commerce store
 dedicated to 
providing carefully 
selected products of the highest quality.
 <br />
 <br />
We always focus on offering a simple , fast ,
 and secure shopping experience
 that meets the needs
  of all our customers.
          </p>
         </div>

    </div>

  <div className='our-story'>

    <h1> Our Story</h1>
    <p >Our journey began from a passion for providing a 
      better shopping experience..<br/>
From day one, our goal has been to eliminate customer
 frustration with complexity and delay. 
   <br/>
 We've built a simple, fast,
  and organized store 
offering reliable products at reasonable prices.</p>
  </div>


    

    </div>
   
    </PageTransition>
  )
}

export default AboutPage
