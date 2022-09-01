import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export default function NoiseDol({}) {
  const model = useGLTF('assets/model/noise1.glb');
  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} scale={[1, 1, 1]} />
    </Suspense>
  );
}
