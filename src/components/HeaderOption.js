import React from 'react'
import '../styles/Header.css'


const HeaderOption = ({ Icon, title, onclick }) => {
  return (
    <div onClick={onclick} className='headerOption'>
      <span className='headerOption_icon'>{Icon && <Icon className="header_icom" />}</span>
      <p className='headeroption_text'>{title}</p>
    </div>
  )
}

export default HeaderOption