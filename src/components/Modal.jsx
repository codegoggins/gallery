import React, { useState } from 'react'
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
position:fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
height:95vh;
border: 1px solid lightgrey;
border-radius: 0.5rem;
overflow: hidden;
display:${props => props.open ? 'flex' : 'none'};
margin: 1rem;
align-items: center;
background: white;
z-index: 10;

 @media(max-width:940px){
    flex-direction: column;
 }
`;

const Image = styled.img`
flex: 1;
object-fit: cover;
width: 100%;
height:100%;

@media(max-width:940px){
height:50%;
 }

`;


const Details = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 2rem;
padding: 1rem;
align-items: flex-start;
width: 100%;
`;

const User = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
`;

const UserDetails = styled.div`
display: flex;
width:100%;
align-items:right;
justify-content: space-between;
padding: 0rem 1rem;
`;

const UserInfo = styled.div`
display: flex;
align-items:left;
flex-direction: column;
`;

const UserImage = styled.img`
width: 3rem;
height: 3rem;
border-radius: 50%;
`;

const Likes = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

const LikesCount = styled.p``;

const Name = styled.p`
font-weight: 600;
`;

const UserName = styled.p`
color:gray;
`;

const ImageDesc = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const Close = styled.div`
position: absolute;
cursor: pointer;
top: 2rem;
right: 2rem;

@media(max-width:940px){
top: 2rem;
right: 1rem;
}

`;

const Desc = styled.p``;
const AltDesc = styled.p``;
const UploadDate = styled.p`
color: grey;
`;


const Modal = ({isOpen,data,closeModal}) => {
  
  return (


    <Container open={isOpen}>
        <Image src={data.urls.full}/>
        <Details>
        <Close>
            <CloseIcon fontSize='large' onClick={closeModal}/>
        </Close>
        <UserDetails>
              <User>
                  <UserImage src={data.user.profile_image.small}/>
                 <UserInfo>
                    <Name>{data.user.name}</Name>
                    <UserName>{data.user.username}</UserName>
                </UserInfo>
             </User>
             <Likes>
                 <LikesCount>{data.likes}</LikesCount>
                 <ThumbUpIcon fontSize='medium'/>
             </Likes>
        </UserDetails>
        <ImageDesc>
            <Desc>{data.description}</Desc>
            <AltDesc>
            {data.alt_description}
            </AltDesc>
            <UploadDate>
              {new Date(data.created_at).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}
            </UploadDate>
        </ImageDesc>
        </Details>
    </Container>
  )
}

export default Modal