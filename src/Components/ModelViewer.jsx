import React, { useRef, useEffect, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";
import studio from "/photo_studio_01_4k.hdr"
const ModelViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { modelPath } = location.state || {};

  const Model = () => {
    const gltf = useGLTF(modelPath);
    const { scene } = gltf;
    const { camera } = useThree();
    const modelRef = useRef();

    useEffect(() => {
      if (modelRef.current) {
        const box = new THREE.Box3().setFromObject(modelRef.current);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center the model
        modelRef.current.position.x -= center.x;
        modelRef.current.position.y -= center.y;
        modelRef.current.position.z -= center.z;

        // Adjust camera to fit the model
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let distance = maxDim / (2 * Math.tan(fov / 2));

        distance *= 2; // Add some padding
        camera.position.set(0, 0, distance);
        camera.lookAt(0, 0, 0);
      }
    }, [scene, camera]);

    return <primitive ref={modelRef} object={scene} />;
  };

  return (
    <div className="relative w-full h-screen bg-[#292929] text-white">
      {/* Navigation Buttons */}
      <div className="absolute top-5 left-5 z-50 space-y-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 mx-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          Back to Projects
        </button>
      </div>

      {/* 3D Model Canvas */}
      <Canvas className="w-full h-full">
         <Suspense fallback={<Html center><div className="text-white">Loading...</div></Html>}>
        {/* Ambient and HDRI Lighting */}
        <ambientLight intensity={0.3} />
        <Environment
          files={studio} 
          background
        //   ground={{ height: 1 }}
        />
        <spotLight position={[10, 10, 10]} angle={0.3} intensity={1} castShadow />
        <Model />
        <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
