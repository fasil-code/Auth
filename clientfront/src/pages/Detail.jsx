import React from 'react'
import { posts } from '../data'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
function Detail() {
    const location=useLocation();
    const path=location.pathname.split("/")[2]
    const post=posts.find((p)=>p.id.toString() === path)
    return (
     <Container>
 
          <img src={post.img}></img>
          <span>{post.title}</span>
          <p>{post.longDesc}</p>
     </Container>
    )
}

export default Detail
const Container=styled.div`
display:flex;
flex-direction:column;
padding:0px 10px;
img{
    height:400px;
    width:100%;
}
span{
    text-align:center;
    font-weight:800;
    font-size:26px;
}
p{
    padding:5px 10px;
    line-height:20px;
    letter-spacing:1.3px;
    font-size:16px;
    color:rgba(0,0,0,1.6);
}

`