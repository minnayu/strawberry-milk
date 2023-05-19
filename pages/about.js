import { Container, Main, Title, Description } from '../components/sharedstyles'
import styled from 'styled-components'

export default function About() {
  return (
    <Page>
      <Wrapper> 
        <div className="box">
          hey
        </div>
      </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

