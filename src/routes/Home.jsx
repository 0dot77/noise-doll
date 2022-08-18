import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Layout from '../components/Layout';
import HomeObj from '../models/HomeObj';

const HomeContainer = styled.article`
  width: 100%;
  height: 80%;
  background-color: #000000;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
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
