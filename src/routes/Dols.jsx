import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import NoiseOne from '../models/NoiseDol';
import { OrbitControls } from '@react-three/drei';

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
  width: 100%;
  height: 10%;
  z-index: 2000;
  color: white;
  bottom: 15%;
  font-size: 8rem;
  font-family: mainFont;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575px) {
    font-size: 3rem;
  }
`;

export default function Dols() {
  return (
    <DolContainer>
      <iframe
        src="https://www.youtube.com/embed/23jkV5STIb0?controls=1?rel=0&amp;autoplay=1&mute=1&apm;loop=0;"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
      <Canvas className="model-canvas" camera={{ position: [0, 0, 7] }} style={{ height: '50%' }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <NoiseOne />
        <OrbitControls />
      </Canvas>
      <DolTextContainer>
        <h1>NoM nOm</h1>
      </DolTextContainer>
    </DolContainer>
  );
}
