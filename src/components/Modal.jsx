import React from 'react'
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
height:95vh;
border: 1px solid lightgrey;
border-radius: 0.5rem;
overflow: hidden;
margin: 1rem;
display: flex;
align-items: center;
`;

const Image = styled.img`
flex: 1;
object-fit: cover;
width: 100%;
height:100%;
`;


const Details = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 2rem;
padding: 1rem;
align-items: flex-start;
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

const ImageDesc = styled.p`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const Close = styled.div`
position: absolute;
top: 2rem;
right: 2rem;
`;

const Modal = ({link,user,likes}) => {
  return (
    <Container>
        <Close>
            <CloseIcon fontSize='large'/>
        </Close>
        <Image src='https://images.pexels.com/photos/14454924/pexels-photo-14454924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Details>
        <UserDetails>
              <User>
                  <UserImage src='https://images.pexels.com/photos/9833110/pexels-photo-9833110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                 <UserInfo>
                    <Name>nilay</Name>
                    <UserName>@nilay</UserName>
                </UserInfo>
             </User>
             <Likes>
                 <LikesCount>2.3k</LikesCount>
                 <ThumbUpIcon fontSize='medium'/>
             </Likes>
        </UserDetails>
        <ImageDesc>
            <h1>description</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem nesciunt quaerat laudantium reprehenderit, magni a voluptates saepe sit est harum. Accusantium quasi numquam adipisci officiis, expedita possimus fuga voluptas!
            </p>
            <p>
              24th March
            </p>
        </ImageDesc>
        </Details>
    </Container>
  )
}

export default Modal