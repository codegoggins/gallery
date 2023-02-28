import React from 'react'
import styled from 'styled-components';
import ImgCard from './ImgCard';
import axios from "axios";
import { useState , useEffect } from "react";
import { useSelector } from 'react-redux';
import Modal from './Modal';

const Container = styled.div`
margin-top: 1rem;
column-count: 3;
column-width: 33%;

@media(max-width:1000px){
  column-count:2;
  column-width:50%;
}

@media(max-width:768px){
  column-count:1;
  column-width:100%;
}


`;

const ImgGallery = styled.div``;


const Images = () => {

    let text = useSelector((state) => state.text);
    const [image, setImage] = useState([]);

    const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${text}&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}` 


    const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=5&page=1`

    useEffect(()=>{
        setImage([]);
        if(text === ''){
        axios.get(url).then((response)=>{
           setImage(response.data);
          }).catch((err)=>{
              console.log(err);
          })
        }else{
          axios.get(searchURL).then((response)=>{
            setImage(response.data.results);
           }).catch((err)=>{
               console.log(err);
           })
        }
      },[url,text]);
    
     const [selectedImage,setSelectedImage] = useState(null);
     const [open,setOpen] = useState(false);


     const showModal = (data) => {
      setSelectedImage(data)
      setOpen(true);
     }

     const closeModal = () => {
      setOpen(false);
     }


  return (
      <Container>
      {
        selectedImage && <Modal isOpen={open} data={selectedImage} closeModal={closeModal}/>

      }
         {  
            image.map((item)=>( 
            <ImgGallery key={item.id}>
                <ImgCard link={item.urls.full} user={item.user} likes={item.likes} onClick={()=>showModal(item)}/>
            </ImgGallery>
            ))
         }
    </Container>
  )
}

export default Images