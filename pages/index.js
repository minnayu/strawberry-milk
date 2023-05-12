import Head from 'next/head'
import { useState, useEffect } from 'react'
import Strawberry from '../components/Strawberry'
import Navbar from '../components/Navbar';
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});
  const [noUserEntered, setNoUserEntered] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = async () => {
    // set the user data after setting the username
    setUserData(await fetchUserData(username));
    console.log(`Setting username to: ${username}`);
    setNoUserEntered(false);
  };

  const fetchUserData = async (username) => {
    const res = await fetch(`/api/${username}`)
    return res.json()
  }

  useEffect(() => {
    if (username) {
      // fetch user data once the username has been set
      const fetchData = async () => {
        setUserData(await fetchUserData(username));
      };
      fetchData();
    }
  }, [username]);

  return (
    <div>
      <Navbar>
      { noUserEntered ? (
        <div className="container is-flex is-justify-content-flex-start">
          <Head>
            <title>Get Started</title>
          </Head>
          <h1 style={{ color: "white" }} className="title">
            Get Started
          </h1>
          <div className="field">
            <label className="label">LastFM username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="LastFM Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <button
            className="button is-medium is-link"
            onClick={handleSetUsernameClick}> Enter </button>
        </div>
      ) : (
        <Strawberry data={userData}/>
      ) }
      </Navbar>
    </div>
  );
}
