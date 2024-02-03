import { Canvas, useLoader } from "@react-three/fiber";
import { Center, OrbitControls, Stage, Bounds } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { StyledContainer } from "./styles";

export function Robot() {
  const { scene } = useLoader(GLTFLoader, "./robot.glb");
  return (
    <StyledContainer>
      <Canvas shadows camera={{ position: [150, 0, 500], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={0.1}>
            <Center>
              <Bounds fit>
                <primitive object={scene} scale={0.5} />;
              </Bounds>
            </Center>
          </Stage>
          <OrbitControls makeDefault autoRotate />
        </Suspense>
      </Canvas>
    </StyledContainer>
  );
}
