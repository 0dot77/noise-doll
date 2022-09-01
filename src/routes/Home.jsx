import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import HomeObj from '../models/HomeObj';
import Noise from '../components/Noise';
import { Link } from 'react-router-dom';
import useAudio from '../hooks/useAudio';

export const HomeContainer = styled.article`
  width: 100%;
  height: 80%;
  background-color: #000000;
`;

const SoundControlContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 40rem;
  z-index: 10000;
  top: 10%;

  svg {
    color: white;
    margin-top: 1rem;
    margin-right: 0.5rem;
    display: flex;
    width: 2rem;
  }

  @media all and (max-width: 767px) {
    width: 80%;
    h1 {
      font-size: 5rem;
    }
    svg {
      margin-top: 0.75rem;
      width: 1rem;
      margin-right: 0.5rem;
    }
  }
`;

const MainNav = styled(SoundControlContainer)`
  top: 15%;
  font-family: mainFont;
  a {
    @media all and (max-width: 767px) {
      font-size: 0.5rem;
    }
    color: white;
    text-decoration: none;
  }
`;

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  return (
    <div onClick={toggle}>
      {playing ? (
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
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
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
      )}
    </div>
  );
};

const NoiseContainer = styled.div`
  margin-top: 15%;
  height: 80%;
  display: flex;
  justify-content: center;
  /* 여기 수정해야함 */
  @media all and (max-width: 767px) {
    heigth: 50%;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <SoundControlContainer>
        <Player url={'assets/sound/noise-main.mp3'} />
      </SoundControlContainer>
      <MainNav>
        <Link to="/introduce-dols">Noise DOLS</Link>
      </MainNav>
      <NoiseContainer>
        <Noise />
      </NoiseContainer>
      {/* <Canvas
        className="canvas"
        style={{ position: 'absolute', width: '30rem', zIndex: '1000' }}
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <HomeObj />
        <OrbitControls />
      </Canvas> */}
    </HomeContainer>
  );
}
