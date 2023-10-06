import React from 'react'
import './header.css'
const Title=()=>{
   return <a href='/'><img className='logo' alt='logo'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLRrwgTG38WPoqworWxxb4zpPmI4KH5D5K0BHARnxhQ&s'/>
    </a>
}
const Header = () => {
  return (
    <div className='header'>
       <Title/>
      <div className='nav-iteams'>
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
