import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Strawberry from '../components/Strawberry'
import styled, { keyframes } from "styled-components";

export default function Dashboard ( ) {
    const router = useRouter();
    const [userData, setUserData] = useState({});
    const [hasUserData, setHasUserData] = useState(false);
    const { username } = router.query;

    useEffect(() => {
        const fetchUserData = async () => {
          const res = await fetch(`/api/${username}`);
          const data = await res.json();
          setUserData(data);
          setHasUserData(true)
        };
    
        if (username) {
          fetchUserData();
        }
    }, [username]);

    return (
      
        <div>
            {hasUserData && userData ? (
                <Strawberry userData={userData}/>
            ) : (
                <div>
                    <LoadingTitle>
                        <p>Loading User Data</p>
                        {LoadingComponent}
                    </LoadingTitle>
                    {/* <progress className="progress is-link" max="100">45%</progress> */}
                    <Loading>
                        <img src='https://freeiconshop.com/wp-content/uploads/edd/lastfm-flat.png' />
                    </Loading>
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