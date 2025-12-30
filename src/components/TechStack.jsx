import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";
import * as THREE from "three";

const words = [
  "React", "JavaScript", "HTML5", "CSS3", "Node.js", 
  "Git", "GitHub", "Python", "SQL", "MongoDB", 
  "Bootstrap", "Tailwind", "Three.js", "Framer", "Vite"
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, "material-toneMapped": false };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate color
    ref.current.material.color.lerp(color.set(hovered ? "#8b5cf6" : "#f1f5f9"), 0.1);
  });

  return (
    <Text 
        ref={ref} 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)} 
        {...props} 
        {...fontProps} 
        children={children} 
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const wordsCoords = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    // Distribute points on a sphere surface (Fibonacci spiral or simple lat/long grid)
    // Here we use a simple Golden Spiral for even distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < words.length; i++) {
        const y = 1 - (i / (words.length - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // radius at y
        
        const theta = phi * i; // golden angle increment

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        temp.push([new THREE.Vector3(x * radius, y * radius, z * radius), words[i]]);
    }
    return temp;
  }, [count, radius]);

  return wordsCoords.map(([pos, word], index) => <Word key={index} position={pos}>{word}</Word>);
}

function TechStack() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={8} radius={20} />
        <OrbitControls 
            autoRotate 
            enableZoom={false} 
            enablePan={false}
            autoRotateSpeed={2.0}
        />
      </Canvas>
    </div>
  );
}

import { useState } from "react";
export default TechStack;
