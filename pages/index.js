import Head from 'next/head'
import { useState } from 'react'
import Strawberry from '../components/Strawberry'
import Layout from '../components/Layout';
const { lfmGetUser } = require('../functions.js')

export default function Home() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = async () => {
    // do something with the username, e.g. make an API call
    const newUsername = await lfmGetUser(username);
    setUsername(newUsername.name);
    console.log(`Setting username to: ${newUsername.name}`);
    // setData(newUsername);
  };

  return (
    <div>
      <Layout>
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
          <button className="button is-medium is-link" onClick={handleSetUsernameClick}>
            Set Username
          </button>
          {/* <Strawberry data={data} /> */}
        </div>
      </Layout>
    </div>
  );
}
