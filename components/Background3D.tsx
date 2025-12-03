import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Define R3F elements as any to avoid TypeScript errors with IntrinsicElements
const Mesh = 'mesh' as any;
const PlaneGeometry = 'planeGeometry' as any;
const ShaderMaterial = 'shaderMaterial' as any;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

// --- User Provided Noise Functions ---

float hash(vec2 p) {
    p = fract(p * 0.6180339887);
    p *= 25.0;
    return fract(p.x * p.y * (p.x + p.y));
}

float noise(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(p + vec2(0, 0));
    float b = hash(p + vec2(1, 0));
    float c = hash(p + vec2(0, 1));
    float d = hash(p + vec2(1, 1));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

const mat2 mtx = mat2(0.80, 0.60, -0.60, 0.80);

float fbm4(vec2 p) {
    float f = 0.0;
    f += 0.5000 * (-1.0 + 2.0 * noise(p)); p = mtx * p * 2.02;
    f += 0.2500 * (-1.0 + 2.0 * noise(p)); p = mtx * p * 2.03;
    f += 0.1250 * (-1.0 + 2.0 * noise(p)); p = mtx * p * 2.01;
    f += 0.0625 * (-1.0 + 2.0 * noise(p));
    return f / 0.9375;
}

float fbm6(vec2 p) {
    float f = 0.0;
    f += 0.500000 * noise(p); p = mtx * p * 2.02;
    f += 0.250000 * noise(p); p = mtx * p * 2.03;
    f += 0.125000 * noise(p); p = mtx * p * 2.01;
    f += 0.062500 * noise(p); p = mtx * p * 2.04;
    f += 0.031250 * noise(p); p = mtx * p * 2.01;
    f += 0.015625 * noise(p);
    return f / 0.96875;
}

vec2 fbm4_2(vec2 p) {
    return vec2(fbm4(p + vec2(1.0)), fbm4(p + vec2(6.2)));
}

vec2 fbm6_2(vec2 p) {
    return vec2(fbm6(p + vec2(9.2)), fbm6(p + vec2(5.7)));
}

float func(vec2 q, out vec2 o, out vec2 n) {
    q += 0.05 * sin(vec2(0.11, 0.13) * uTime + length(q) * 4.0);
    q *= 0.7 + 0.2 * cos(0.05 * uTime);
    o = 0.5 + 0.5 * fbm4_2(q);
    o += 0.02 * sin(vec2(0.13, 0.11) * uTime * length(o));
    n = fbm6_2(4.0 * o);
    vec2 p = q + 2.0 * n + 1.0;
    float f = 0.5 + 0.5 * fbm4(2.0 * p);
    f = mix(f, f * f * f * 3.5, f * abs(n.x));
    f *= 1.0 - 0.5 * pow(0.5 + 0.5 * sin(8.0 * p.x) * sin(8.0 * p.y), 8.0);
    return f;
}

float funcs(in vec2 q) {
    vec2 t1, t2;
    return func(q, t1, t2);
}

void main() {
    vec2 q = (vUv - 0.5) * 2.0;
    q.x *= uResolution.x / uResolution.y;

    vec2 o, n;
    float f = func(q, o, n);
    
    vec3 col = vec3(0.05, 0.02, 0.1);
    col = mix(col, vec3(0.25, 0.0, 0.35), f); 
    col = mix(col, vec3(0.8, 0.0, 0.6), dot(n, n) * 0.4); 
    col = mix(col, vec3(0.1, 0.0, 0.4), 0.5 * o.y * o.y);
    col = mix(col, vec3(0.0, 0.7, 1.0), 0.5 * smoothstep(1.2, 1.3, abs(n.y) + abs(n.x)));
    col *= f * 1.5;

    vec2 ex = vec2(1.0 / uResolution.x, 0.0);
    vec2 ey = vec2(0.0, 1.0 / uResolution.y);
    vec3 nor = normalize(vec3(funcs(q + ex) - f, ex.x, funcs(q + ey) - f));
    
    vec3 lig = normalize(vec3(0.9, -0.2, -0.4));
    float dif = clamp(0.3 + 0.7 * dot(nor, lig), 0.0, 1.0);

    vec3 lin = vec3(0.85, 0.90, 0.95) * (nor.y * 0.5 + 0.5);
    lin += vec3(0.15, 0.10, 0.05) * dif;

    col *= lin;
    col = pow(col, vec3(0.8));
    col *= 1.2;

    gl_FragColor = vec4(col, 1.0);
}
`;

const ShaderPlane = ({ isAnimated }: { isAnimated: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      if (isAnimated) {
        materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      }
      materialRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height);
    }
  });

  return (
    <Mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <PlaneGeometry args={[1, 1]} />
      <ShaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </Mesh>
  );
};

interface Background3DProps {
  paused?: boolean;
}

const Background3D: React.FC<Background3DProps> = ({ paused = false }) => {
  const [isPageVisible, setPageVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageVisible(document.visibilityState === 'visible');
    };

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Render only if not paused manually via prop AND if the browser tab is visible
  const shouldRender = !paused && isPageVisible;

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        frameloop={shouldRender ? "always" : "never"} // Stops the render loop completely to save battery
        dpr={[1, 1.5]} 
        gl={{ antialias: false }} 
        performance={{ min: 0.5 }} 
      >
         <ShaderPlane isAnimated={!isMobile} />
      </Canvas>
    </div>
  );
};

export default Background3D;