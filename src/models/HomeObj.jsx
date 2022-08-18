import { useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function HomeObj() {
  const ref = useRef(null);
  const model = useLoader(GLTFLoader, 'assets/model/mm_project.glb');
  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={model.scene} />
    </Suspense>
  );
}
