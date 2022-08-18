import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Layout from '../components/Layout';
import HomeObj from '../models/HomeObj';
import Noise from '../components/Noise';

const HomeContainer = styled.article`
  width: 100%;
  height: 80%;
  background-color: #000000;
`;

const NoiseContainer = styled.div`
  position: absolute;
  width: 40rem;
  height: 80%;
  display: flex;
  justify-content: center;

  @media all and (max-width: 767px) {
    width: 60%;
    heigth: 50%;

    align-items: center;
    justify-content: center;
  }
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <NoiseContainer>
          <Noise />
        </NoiseContainer>
        <Canvas
          className="canvas"
          style={{ position: 'absolute', width: '40rem', zIndex: '1000' }}
          camera={{ position: [0, 0, 7] }}
        >
          <directionalLight intensity={0.5} />
          <HomeObj />
          <OrbitControls />
        </Canvas>
      </HomeContainer>
    </Layout>
  );
}
