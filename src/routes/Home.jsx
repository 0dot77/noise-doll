import { EnvironmentMap, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import HomeObj from '../models/HomeObj';

const HomeContainer = styled.article`
  width: 100%;
  height: 80%;
  background-color: #000000;
`;

const CanvasContainer = styled.article`
  width: 40rem;
  height: 100%;
  opacity: 0.5;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <Canvas className="canvas" style={{ position: 'absolute', zIndex: '1000' }} camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={0.5} />
          <HomeObj />
          <OrbitControls />
        </Canvas>
      </HomeContainer>
    </Layout>
  );
}
