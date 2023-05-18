import { useState, useEffect } from 'react'
import Strawberry from '../components/Strawberry'
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = async () => {
    // Navigate to Dashboard page with the username as a query parameter
    router.push({
      pathname: '/dashboard',
      query: { username: username },
    });
  };

  return (
    <div>
        <div className="container is-flex is-justify-content-flex-start">
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
            <button
            className="button is-medium is-link"
            onClick={handleSetUsernameClick}> Enter </button>
          </div>
        </div>
    </div>
  );
}
