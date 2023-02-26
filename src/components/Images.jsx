import React from 'react'
import styled from 'styled-components';
import ImgCard from './ImgCard';
import axios from "axios";
import { useState , useEffect } from "react";

const Container = styled.div`
margin-top: 1rem;
padding: 2rem;
column-count: 3;
column-width: 33%;
`;

const ImgGallery = styled.div``;



const Data = [
    {
        id:1,
        link:'https://images.unsplash.com/photo-1677352240737-595fbf4af29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80'
    },
    {
        id:2,
        link:'https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id:3,
        link:'https://images.unsplash.com/photo-1677350840391-6dbcea6498d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id:4,
        link:'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id:5,
        link:'https://images.unsplash.com/photo-1677185072786-ad7ca429de43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id:6,
        link:'https://images.unsplash.com/photo-1677362376803-93af835b3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:7,
        link:'https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id:8,
        link:'https://images.unsplash.com/photo-1677330888529-3b859572df7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
]  

const Images = () => {

    const [image, setImage] = useState([]);

    const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=50`
  
    useEffect(()=>{
      axios.get(url).then((response)=>{
         setImage(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);
    
    console.log(image);

  return (
      <Container>
         {  
            image.map((item)=>(
            <ImgGallery key={item.id}>
                <ImgCard link={item.urls.full} user={item.user} likes={item.likes}/>
            </ImgGallery>
            ))
         }
    </Container>
  )
}

export default Images