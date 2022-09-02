import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Title() {
  const model = useGLTF(`assets/model/title.glb`);
  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} scale={[0.5, 0.5, 0.5]} />
    </Suspense>
  );
}
