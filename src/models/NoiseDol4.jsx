import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export default function NoiseDol4() {
  const model = useGLTF(`assets/model/noise4.glb`);
  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} scale={[0.8, 0.8, 0.8]} />
    </Suspense>
  );
}
