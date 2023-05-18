import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Strawberry from '../components/Strawberry'

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
                    <p class="is-title">Loading user data...</p>
                    <progress class="progress is-link" max="100">45%</progress>
                </div>
            )}
        </div>
    );
}