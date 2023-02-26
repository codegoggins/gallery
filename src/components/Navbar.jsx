import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 3rem;
padding: 2rem 4rem;
`;

const Left = styled.div``;

const Logo = styled.h1`
  font-family: 'Gloock', serif;
  font-weight: 800;
  font-size: 1.3rem;
`;

const Center = styled.div``;

const Right = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`;

const Search = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid lightgrey;
display: flex;
align-items: center;
gap:1rem;
color: grey;
padding: 0.4rem 8rem 0.4rem 0.3rem;
border-radius: 0.3rem;
`;

const Input = styled.input`
border: none;
color: grey;
&:focus{
    outline: none;
}
`;


const Text = styled.p``;

const Circle = styled.div`
width: 1rem;
height: 1rem;
border-radius: 50%;
background-color: white;
cursor: pointer;
`;

const DarkMode = styled.div`
height: 1.2rem;
width: 2.6rem;
border-radius: 200px;
display: flex;
align-items: center;
justify-content:left;
padding: 0.6rem 0.1rem;
border: 1px solid gray;
background-color: black;
border: none;
`;

const Navbar = () => {
  return (
    <Container>
        <Left>
            <Logo>Image Gallery</Logo>
        </Left>
        <Center>
            <Search>
                <SearchIcon/>
                <Input placeholder='Search'/>
            </Search>
        </Center>
        <Right>
            <Text>Dark Mode</Text>
            <DarkMode>
                <Circle/>
            </DarkMode>
        </Right>
    </Container>
  )
}

export default Navbar