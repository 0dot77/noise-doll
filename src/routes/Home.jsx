import styled from 'styled-components';
import Noise from '../components/Noise';
import { Link } from 'react-router-dom';
import useAudio from '../hooks/useAudio';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Title from '../models/Title';

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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 3rem;

  a:hover {
    color: #80ff00;
  }
  a {
    @media all and (max-width: 767px) {
      font-size: 2rem;
    }
    color: white;
    text-decoration: none;
  }
`;

export const Player = ({ url }) => {
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
        <Player url={'assets/sound/enter.mp3'} />
      </SoundControlContainer>
      <MainNav>
        <Link to="/introduce-dols">Noise DOLS</Link>
        <Link to="/playlist">Noise Playlist</Link>
      </MainNav>
      <NoiseContainer>
        <Noise />
        <Canvas
          className="model-canvas"
          camera={{ position: [0, 0, 7] }}
          style={{ position: 'absolute', height: '80%' }}
        >
          <ambientLight intensity={1} />
          <directionalLight intensity={1} />
          <Title />
          <OrbitControls />
        </Canvas>
      </NoiseContainer>
    </HomeContainer>
  );
}
