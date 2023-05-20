import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSetUsernameClick = async () => {
    // Navigate to Dashboard page with the username as a query parameter
    if (typeof window !== 'undefined') {
      window.handleSetUsername(username);
    }

    router.push({
      pathname: '/dashboard',
      query: { username: username },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    handleSetUsernameClick(); // Call the handleSetUsernameClick function
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <Input
              className="input"
              type="text"
              placeholder="LastFM Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <button
            className="button is-medium is-link mt-5"
            type="submit"> Enter </button>
        </div>
      </form>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const Input = styled.input`
  font-family: 'Poppins';
  width: 100%;
  border: 0;
  border-bottom: 2px solid #8A4D76;
  outline: 0;
  font-size: 1.3rem;
  color: #8A4D76;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:hover {
    border-bottom: 2px solid #8A4D76;
  }
`;
