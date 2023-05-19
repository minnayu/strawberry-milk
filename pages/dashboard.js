import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Strawberry from '../components/Strawberry'
import styled, { keyframes } from "styled-components";

export default function Dashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState({});
    const [hasUserData, setHasUserData] = useState(false);
    const { username } = router.query;
  
    useEffect(() => {
      const fetchUserData = async () => {
        console.log('Fetching user data...')
        try {
          const response = await fetch(`/api/${username}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          setUserData(data);
          setHasUserData(true);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      if (username) {
        fetchUserData();
      }
    }, [username]);
  
    return (
      <div>
        {hasUserData && userData ? (
          <Strawberry userData={userData} />
        ) : (
          <div>
            {/* <LoadingTitle> */}
              <p>Loading User Data</p>
              {/* {LoadingComponent} */}
            {/* </LoadingTitle> */}
            {/* <Loading>
              <img src='https://freeiconshop.com/wp-content/uploads/edd/lastfm-flat.png' />
            </Loading> */}
          </div>
        )}
      </div>
    );
}
  

const LoadingAnimation = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  75% { content: '..'; }
  100% { content: '...'; }
`;

const LoadingTitle = styled.div`
    font-family: 'Poppins';
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;

    &::after {
    content: '...';
    animation: ${LoadingAnimation} 1s infinite;
    }
`;

const LoadingComponent = () => {
  return <LoadingTitle>Loading</LoadingTitle>;
};

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spinAnimation} 1s linear infinite;
`;