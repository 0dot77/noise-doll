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
`;
export default function Layout({ children }) {
  return (
    <MainContainer>
      <ContentContainer>
        <Header>
          <p>THIS IS ANNOYED WEB</p>
        </Header>
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
