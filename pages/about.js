import styled from 'styled-components'

export default function About() {
  return (
    <div>
      <Page>
        <div class="card m-6">
          <div class="card-image">
          <figure class="image">
              <img style={{height:"100%", width:"100%"}} src='https://media.licdn.com/dms/image/C4D03AQFtnaGAasyykA/profile-displayphoto-shrink_400_400/0/1639712520327?e=1689811200&v=beta&t=zEy3ktshB-uv3b50aREOvI7AEYcPNHzqpKSoSuB15rM' alt="hyunjin mugshot"/>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="is-centered is-size-4">
                <a href="https://www.linkedin.com/in/minna-yu-54ab531bb/" _target="blank">Minna Yu</a>
              </p>
            </div>
          </div>
        </div>
        <div class="card m-6">
          <div class="card-image">
            <figure class="image">
              <img style={{height:"100%", width:"100%"}}src='https://media.licdn.com/dms/image/D4E03AQH82y01emPung/profile-displayphoto-shrink_400_400/0/1684476582136?e=1689811200&v=beta&t=oMpIC80p5ZS-S7wNeWsYyiSx4ursMesIDqOILkhEw24' alt="Chris peace sign" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="is-size-4">
                <a href="https://www.linkedin.com/in/christonthat/" _target="blank">Chris Ton-That</a>
              </p>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

const Page = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;
