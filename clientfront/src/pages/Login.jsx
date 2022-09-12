import React from 'react'
import styled from "styled-components"


function Login() {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
      };
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
      const facebook= () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
    return (
        <Container>
         <h1 className='headi'>Choose a Login Method</h1>
        <Wrap>
         
           <Left>
<Icon  className="google" onClick={google}>
    <img className='lg' src="./images/google.png"></img>
          Google
</Icon>
<Icon className='face' onClick={facebook}>
    <img className='lg' src="./images/facebook.png"></img>
    Facebook
</Icon>
<Icon className='git' onClick={github}>
    <img  className='lg' src="./images/github.png"></img>
    Github
</Icon>
           </Left>
           <Mid>
          
            <div></div>  
           </Mid>
           <Right>
<input type="text" placeholder="Username"></input>
<input type="text" placeholder="password"></input>
<button className='butn'>Login</button>
           </Right>
           </Wrap>
        </Container>
    )
}

export default Login
const Container=styled.div`
height:90vh;
display:flex;
align-items:center;

justify-content:center;

`
const Wrap=styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:50%;
height:60%;
display:flex;
flex-direction:row;
align-items:center;
padding:10px 20px;
justify-content:space-between;
cursor:pointer;


`
const Left=styled.div`
padding-left:70px;
justify-content:center;
`
const Right=styled.div`

display:flex;
flex-direction:column;

`
const Icon=styled.div`
width:160px;

display:flex;
align-items:center;
padding:7px 20px;
border-radius:5px;
color:white;
margin-bottom:15px;
font-weight:bold;


`
const Mid=styled.div`

div{
    width:0.5px;
    height:54vh;
    background-color:grey;
}

`
