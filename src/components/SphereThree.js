import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react';
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.80;
      float noiseAmp = 0.1;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 100.2;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const MyRotatingSphere = () => {
  const myMesh = React.useRef();
  useFrame(({ clock }) => (myMesh.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "gradient.jpeg"
  ]);

  return (
    <mesh scale={6}>
        <sphereBufferGeometry args={[0.4, 100.1, 1000, 700]} />
        {/* <planeBufferGeometry args={[0.4, 0.6, 16, 16]} /> */}
        <waveShaderMaterial ref={myMesh} uTexture={image} uColor={"white"} />
        {/* <boxGeometry />
        <meshPhongMaterial color="#DBEBC0" roughness={100} metalness={100} reflectivity={1} shininess={100}/> */}
    </mesh>
  );
}

export default function SphereThree() {
  return (
    <div id="canvas-container">
        <Canvas>
          <Suspense fallback={null}>
            <MyRotatingSphere />
          </Suspense>
          <ambientLight intensity={0.1} />
          <directionalLight color="#FFFFFF" position={[10, 10, 10]} intensity={1}/>
        </Canvas>
    </div>
  )
}
