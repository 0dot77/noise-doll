import styled, { keyframes } from 'styled-components';

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const ContentContainer = styled.section`
  width: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (max-width: 767px) {
    width: 80%;
  }

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const textScroll = keyframes`
  from{
    transform:translateX(100%);
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%);
    -o-transform:translateX(100%);
    -ms-transform:translateX(100%);
  }
  to{
    transform:translateX(-100%);
    -moz-transform:translateX(-100%);
    -webkit-transform:translateX(-100%);
    -o-transform:translateX(-100%);
    -ms-transform:translateX(-100%);
  }
`;

const Border = styled.div``;

const Header = styled.header`
  width: 100%;
  height: 3rem;
  font-family: 'mainFont';
  color: #000000;
  background-color: #80ff00;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;
const Footer = styled.footer`
  width: 100%;
  font-family: 'mainFont';
  color: #000000;
  background-color: #80ff00;
  font-size: 2rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  flex: 0 0 auto;
  white-space: nowrap;
  p {
    animation: ${textScroll} 5s linear infinite;
  }
`;

const BackgroundTextContainer = styled.div`
  position: absolute;
  width: 40rem;
  height: 80%;
  h1 {
    font-size: 10rem;
    color: #ffffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
  }
  @media all and (max-width: 767px) {
    width: 80%;
    h1 {
      font-size: 5rem;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: blur(3px);
  z-index: 1;
`;

const SoundControlContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 40rem;
  z-index: 1000;
  top: 10%;

  svg {
    color: white;
    margin-top: 1rem;
    margin-right: 1rem;
    display: flex;
    width: 2rem;
  }

  @media all and (max-width: 767px) {
    width: 80%;
    h1 {
      font-size: 5rem;
    }
    svg {
      margin-top: 0.5rem;
      width: 1rem;
      margin-right: 0.5rem;
    }
  }
`;
export default function Layout({ children }) {
  return (
    <MainContainer>
      <ContentContainer>
        <Header>
          <p>THIS IS ANNOYED WEB</p>
        </Header>
        <SoundControlContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              clip-rule="evenodd"
            />
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        </SoundControlContainer>
        <BackgroundTextContainer>
          <h1>MAKE</h1>
          <h1>YOUR</h1>
          <h1>NOISE -</h1>
          <h1>DOLL</h1>
        </BackgroundTextContainer>
        {children}
        <Footer>
          <p>How did you come to love Noise? Do you really love that?</p>
        </Footer>
      </ContentContainer>
    </MainContainer>
  );
}
