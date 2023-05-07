import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = () => {
    // do something with the username, e.g. make an API call
    console.log(`Setting username to: ${username}`);
  };

  return (
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
      <button class="button is-medium is-link" onClick={handleSetUsernameClick}>
        Set Username
      </button>
    </div>
  );
}
