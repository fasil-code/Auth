import React from 'react'
import { posts } from '../data'
import Card from '../components/Card'
import styled from "styled-components"
function Home() {
    return (
        <Container>
    {posts.map(post=>(
     <Card key={post.id} post ={post}/>   
    ))}
      
        </Container>
    )
}

export default Home
const Container =styled.div`
display:flex;
font-size=40px;
padding:30px 40px;
justify-content:space-between;
flex-wrap:wrap;
`
