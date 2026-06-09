"use client";

import { Float, Line, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { CSSProperties } from "react";
import type { Group } from "three";

type Point3 = [number, number, number];

const nodes = [
  { label: "Booking", position: [-2.6, 1.25, 0] },
  { label: "Finance", position: [2.45, 1.05, -0.1] },
  { label: "Inventory", position: [-2.25, -1.15, 0.25] },
  { label: "Payments", position: [2.15, -1.1, 0.1] },
  { label: "Tour Ops", position: [0, -1.95, -0.15] },
] satisfies Array<{ label: string; position: Point3 }>;

function OperationsGraph() {
  const groupRef = useRef<Group>(null);
  const paths = useMemo(
    () =>
      nodes.map((node): [Point3, Point3] => [
        [0, 0, 0],
        node.position,
      ]),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.26) * 0.18;
    groupRef.current.rotation.x =
      Math.cos(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.16}>
        <mesh>
          <icosahedronGeometry args={[0.72, 2]} />
          <meshStandardMaterial
            color="#ffcc33"
            roughness={0.28}
            metalness={0.36}
            emissive="#332400"
            emissiveIntensity={0.22}
          />
        </mesh>
        <Text
          position={[0, 0, 0.86]}
          fontSize={0.26}
          color="#252525"
          anchorX="center"
          anchorY="middle"
        >
          AI
        </Text>
      </Float>

      {paths.map((path, index) => (
        <Line
          key={`path-${index}`}
          points={path}
          color={index % 2 === 0 ? "#3366ff" : "#ffcc33"}
          lineWidth={2}
          transparent
          opacity={0.55}
        />
      ))}

      {nodes.map((node, index) => (
        <Float
          key={node.label}
          speed={1 + index * 0.08}
          rotationIntensity={0.08}
          floatIntensity={0.25}
        >
          <group position={node.position}>
            <mesh>
              <sphereGeometry args={[0.28, 32, 32]} />
              <meshStandardMaterial
                color={index % 2 === 0 ? "#3366ff" : "#ffffff"}
                roughness={0.32}
                metalness={0.16}
                emissive={index % 2 === 0 ? "#08163f" : "#332400"}
                emissiveIntensity={0.18}
              />
            </mesh>
            <Text
              position={[0, -0.54, 0.08]}
              fontSize={0.16}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.35}
            >
              {node.label}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

type TravelOpsSceneProps = {
  variant?: "hero" | "panel";
};

export function TravelOpsScene({ variant = "panel" }: TravelOpsSceneProps) {
  const isHero = variant === "hero";

  return (
    <div className={isHero ? "threeScene heroThreeScene" : "threeScene"} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, isHero ? 5.7 : 6.2], fov: isHero ? 52 : 48 }}>
        <color attach="background" args={[isHero ? "#fff4c2" : "#252525"]} />
        <ambientLight intensity={0.95} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <pointLight position={[-4, -3, 4]} color="#ffcc33" intensity={55} />
        <OperationsGraph />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isHero ? 0.8 : 0.45}
        />
      </Canvas>
      {!isHero && (
        <div className="blueGrowthGraph">
          <span>Business growth</span>
          <div className="growthBars">
            <i style={{ "--h": "34%" } as CSSProperties} />
            <i style={{ "--h": "52%" } as CSSProperties} />
            <i style={{ "--h": "66%" } as CSSProperties} />
            <i style={{ "--h": "82%" } as CSSProperties} />
            <i style={{ "--h": "96%" } as CSSProperties} />
          </div>
          <svg viewBox="0 0 420 170" role="presentation">
            <defs>
              <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3366ff" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#3366ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="growthArea"
              d="M0 142 C58 136 72 112 118 112 C168 112 172 82 220 82 C272 82 280 48 332 48 C370 48 388 26 420 18 L420 170 L0 170 Z"
            />
            <path
              className="growthLine"
              d="M0 142 C58 136 72 112 118 112 C168 112 172 82 220 82 C272 82 280 48 332 48 C370 48 388 26 420 18"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
