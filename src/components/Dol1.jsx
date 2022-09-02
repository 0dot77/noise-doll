import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import NoiseDol1 from '../models/NoiseDol1';
import { Player } from '../routes/Home';

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

const DolContainer = styled.article`
  width: 100%;
  height: 80%;
  display: flex;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  iframe {
    position: absolute;
    width: 40rem;
    height: 80%;
    @media (max-width: 575px) {
      width: 18.8rem;
      height: 80%;
    }
  }
`;

const DolTextContainer = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  z-index: 2000;
  color: white;
  bottom: 15%;
  font-size: 5rem;
  font-family: mainFont;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 5rem;
  }
  @media (max-width: 575px) {
    font-size: 3rem;
  }
`;

export default function Dol1({ nextPath, title }) {
  const navi = useNavigate();
  function handleNextPath() {
    navi(`${nextPath}`);
  }
  return (
    <DolContainer>
      <SoundControlContainer>
        <Player url={'assets/sound/sound1.mp3'} />
      </SoundControlContainer>
      <Canvas
        className="model-canvas"
        camera={{ position: [0, 0, 7] }}
        style={{
          height: '100%',
          backgroundImage: 'url(assets/imgs/noise1.png',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <NoiseDol1 />
        <OrbitControls />
      </Canvas>
      <DolTextContainer>
        <h1>{title}</h1>
        <svg
          onClick={handleNextPath}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
          />
        </svg>
      </DolTextContainer>
    </DolContainer>
  );
}
