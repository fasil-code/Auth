import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
function Card({post}) {
    return (
    
        <Wrap>
        <Link className="link" to={`/detail/${post.id}`}>
          <span>{post.title}</span>
          <img src={post.img}></img>
          <p>{post.desc}</p>
          <button>Read More</button>
          </Link>
        </Wrap>
      
    )
}

export default Card

const Wrap=styled.div`
width:30%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:5px 10px;
img{
    width:100%;
    height:200px;
    object-fit:cover;
    margin:20px 0;
}
p{
    color:#333;
    margin-bottom:20px;
    line height:25px;
}
button{
    border:none;
    background-color:rgba(102,16,83,0.890);
    color:white;
    padding:5px 10px;
    border-radius:5px;
}
background:#dcedc8;
letter-spacing:1.27px;
`
