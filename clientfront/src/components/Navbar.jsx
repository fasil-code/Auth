import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
function Navbar({user}){
  console.log(user);
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
    return (
        <Nav>
        <Logo>
       <Link className='link' to="/"> AUTH</Link>
        </Logo>
{      
        
    (user)? (  
       <ul>
     <li> 
     <img src={user.photos[0].value}></img>
     </li> 
     <li>{user.displayName}</li> 
     <li onClick={logout}>Logout</li>    
       </ul>
       ): (
        <Link className='link' style={{paddingRight:30}} to="/login">Login</Link>

       )
}
        </Nav>
        
  )
}

export default Navbar
const Nav=styled.div`
height:60px;

width:100 vw;

background-color:#81c784;
color:white;
display:flex;
align-items:center;
justify-content:space-between;

ul{
  display:flex;
margin-right:30px;
list-style:none;
align-items:center;
cursor:pointer;
  li{
img{
  width:50px;
  height:50px;
  border-radius:50%;

}

    padding:5px 10px;
    text-decoration:none;
  }
  
}

`
const Logo=styled.span`

font-size:20px;
margin-left:20px;
`