import Head from 'next/head'
import { useState } from 'react'
import Strawberry from '../components/Strawberry'
import Layout from '../components/Layout';
const { lfmGetUser } = require('../functions.js')


const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});
  const [noUserEntered, setNoUserEntered] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = async () => {
    // get username using API call 
    const newUser = await lfmGetUser(username);
    setUsername(newUser.name);
    console.log(`Setting username to: ${newUser.name}`);
    setUserData(newUser);
    setNoUserEntered(false);
  };

 

  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}
