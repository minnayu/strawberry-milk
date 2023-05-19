import styled from 'styled-components'

export default function About() {
  return (
    <div>
      <Page>
        <div class="card m-6">
          <div class="card-content">
            <div class="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
        <div class="card m-6">
          <div class="card-content">
            <div class="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
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
  height: 100vh;
`;
