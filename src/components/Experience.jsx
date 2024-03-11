import { OrbitControls } from '@react-three/drei';
import { Avatar } from './Avatar';
import { AmbientLight } from 'three';
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      <AmbientLight intensity={1} />
    </>
  );
};
