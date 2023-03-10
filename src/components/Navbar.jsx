import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setTextValue } from '../redux/textSlice';


const Navbar = () => {

  const val = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
     const q = val.current.value;
     dispatch(setTextValue(q));
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
        <Left>
            <Logo>Image Gallery</Logo>
        </Left>
        <Center>
            <Search>
                <SearchIcon onClick={handleSearch}/>
                <Input 
                placeholder='Search'
                onKeyDown={handleKeyDown}
                ref={val}
                />
            </Search>
        </Center>
    </Container>
  )
}

export default Navbar




const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 4rem;
padding: 2rem 1rem;

@media(max-width:768px){
flex-direction: column;
gap: 1rem;
height: 8rem;
}

@media(max-width:1000px){
    padding: 2rem 1.5rem;
}
`;

const Left = styled.div``;

const Logo = styled.h1`
  font-family: 'Gloock', serif;
  font-weight: 800;
  font-size: 1.3rem;
  @media(max-width:768px){
    font-size: 1rem;
  }
`;

const Center = styled.div``;



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

@media(max-width:768px){
padding: 0.4rem 1rem 0.4rem 0.3rem;
}
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