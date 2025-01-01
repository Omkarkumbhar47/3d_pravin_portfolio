import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  CameraShake,
  Environment,
  Html,
  Bounds,
} from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

RectAreaLightUniformsLib.init();

function Light() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime;
  });
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 45, 60), 0.05);
  });
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

function ModelComponent() {
  const { scene } = useGLTF('/Chair.glb'); // Corrected path for model
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 30, 100], fov: 83 }}>
      <Suspense fallback={<Html center><div>Loading...</div></Html>}>
        <ambientLight intensity={0.5} />
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="white" intensity={2} />
        <Light />
        <Environment preset="studio" />

        <Bounds fit clip observe margin={2}>
          <ModelComponent position={[0, 0, 0]} />
        </Bounds>

        <Rig />
      </Suspense>

      <OrbitControls makeDefault />
    </Canvas>
  );
}
