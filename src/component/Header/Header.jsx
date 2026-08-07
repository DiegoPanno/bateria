import React from 'react'
import img from "./img/img-logo-moura.png"
import imgLogoBasinha from "../../../public/img/img-logo.jpg"
import "./Header.css"
import CitySelector from '../CitySelector/CitySelector';

const Header = () => {
  return (
    <div className='conte-logo-header'>
      {/* <img src={img} alt="Logo de Batería Moura" className='img-logo-header' /> */}
      {/* <span className='span-header'>|</span> */}
      <CitySelector />
      <img src={imgLogoBasinha} alt="Logo Basinha agente oficial de baterías Moura" className='img-logo-basinha' />
      
    </div>
  )
}

export default Header
