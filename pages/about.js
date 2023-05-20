import styled from 'styled-components';

export default function About() {
  return (
    <div>
      <Page>
        <Card>
          <div className="card-image">
            <figure className="image">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFtnaGAasyykA/profile-displayphoto-shrink_400_400/0/1639712520327?e=1689811200&v=beta&t=zEy3ktshB-uv3b50aREOvI7AEYcPNHzqpKSoSuB15rM"
                alt="Minna smiling in front of the LACMA Light Display"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p className="is-centered is-size-4">
                <a href="https://www.linkedin.com/in/minna-yu-54ab531bb/" target="_blank">
                  Minna Yu
                </a>
              </p>
              <p className="card-text">
                Hi, I'm a Software Engineering major at Chapman University.
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card-image">
            <figure className="image">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQH82y01emPung/profile-displayphoto-shrink_400_400/0/1684476582136?e=1689811200&v=beta&t=oMpIC80p5ZS-S7wNeWsYyiSx4ursMesIDqOILkhEw24"
                alt="Chris holding up a peace sign with a cardboard cutout of Jennie from Blackpink"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p className="is-size-4">
                <a href="https://www.linkedin.com/in/christonthat/" target="_blank">Chris Ton-That</a>
              </p>
              <p className="card-text">
                Hi, I'm a Computer Science major at Chapman University.
              </p>
            </div>
          </div>
        </Card>
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

const Card = styled.div`
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  margin-left: 5vw;
  margin-right: 5vw;

  .card-content {
    color: #3A3B3C;
    flex-grow: 1;
    text-align: left;
  }

  .card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines to show before truncating */
    -webkit-box-orient: vertical;
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
  }
`;
