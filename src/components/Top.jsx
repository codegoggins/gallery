import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width:full;
height: 25rem;
`;


const Image = styled.img`
width: 100%;
height: 100%;
`

const Top = () => {
  return (
    <Container>
        <Image src='https://images.unsplash.com/photo-1677145918704-fe31d5a2e8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80'/>
    </Container>
  )
}

export default Top