import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components';


const ImgCard = ({link,user,likes,onClick}) => {
  return (
    <Container onClick={onClick}>
        <Image src={link}/>
        <Details>
             <User>
                 <UserImage src={user.profile_image.small}/>
                 <UserDetails>
                    <Name>{user.name}</Name>
                    <UserName>@{user.username}</UserName>
                </UserDetails>
             </User>
             <Likes>
                 <LikesCount>{likes}</LikesCount>
                 <ThumbUpIcon fontSize='medium'/>
             </Likes>
        </Details>
    </Container>
  )
}

export default ImgCard


const Container = styled.div`
cursor: pointer;
height: auto;
flex-direction: column;
border: 1px solid lightgrey;
border-radius: 0.5rem;
overflow: hidden;
margin: 1rem;
`;

const Image = styled.img`
object-fit: cover;
width: 100%;
`;


const Details = styled.div`
display: flex;
align-items: center;
gap: 1rem;
padding: 1rem;
justify-content: space-between;
`;

const User = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
`;

const UserDetails = styled.div`
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
