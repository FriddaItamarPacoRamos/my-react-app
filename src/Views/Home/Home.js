import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex </a>
      <a href="/styled"> Go to Styled </a>

      <p className="perro">Home</p>
      
      
      <div className="box perro" > Box </div>
      <div className="box2"> Quiero una</div>
      <div className="box3"> salchipapa</div>
      <div className="box4"> salchipapa</div>


      <img className="sl"
        src={'https://st4.depositphotos.com/9050074/20821/i/450/depositphotos_208215132-stock-photo-homemade-peruvian-salchipapa-fries-with.jpg'}
        className="imageclass"
      /> 

    </div>
  )
}