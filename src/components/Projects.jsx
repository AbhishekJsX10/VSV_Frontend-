import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import project1 from "../assets/Project_Images/project1.avif"
import project2 from "../assets/Project_Images/project2.avif"
import project3 from "../assets/Project_Images/project3.avif"
import project4 from "../assets/Project_Images/project4.avif"
import project5 from "../assets/Project_Images/project5.avif"
import project6 from "../assets/Project_Images/project6.avif"
import project7 from "../assets/Project_Images/project7.avif"
import project8 from "../assets/Project_Images/project8.avif"
import project9 from "../assets/Project_Images/project9.avif"
import project10 from "../assets/Project_Images/project10.avif"
import project11 from "../assets/Project_Images/project11.avif"
import project12 from "../assets/Project_Images/project12.avif"
import project13 from "../assets/Project_Images/project13.avif"
import project14 from "../assets/Project_Images/project14.avif"
import project15 from "../assets/Project_Images/project15.avif"

// Navigation button component
const NavigationButton = ({ onClick, position }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#C7C8C4',
      fontSize: '1rem',
      padding: '0.5rem',
      zIndex: 20,
      ...(position === 'top' ? {
        top: '1rem'
      } : {
        bottom: '1rem'
      })
    }}
  >
    {position === 'top' ? '↑ Previous Section' : 'Next Section ↓'}
  </button>
)

function FloatingImage({ position, scale, imageUrl }) {
  const meshRef = useRef()
  const texture = useTexture(imageUrl)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3
    meshRef.current.lookAt(state.camera.position)
  })

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({ 
      map: texture,
      side: THREE.DoubleSide,
      roughness: 1,
      metalness: 0,
      envMapIntensity: 1
    })
  }, [texture])

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

function ImageField() {
  const projectImages = [
    project1, project2, project3, project4, project5,
    project6, project7, project8, project9, project10,
    project11, project12, project13, project14, project15
  ]

  const images = useMemo(() => {
    const temp = []
    for (let i = 0; i < projectImages.length * 2; i++) {
      const radius = 8
      const angle = (i / (projectImages.length * 2)) * Math.PI * 2
      const y = (Math.random() - 0.5) * 8
      
      temp.push({
        position: [
          Math.sin(angle) * radius,
          y,
          Math.cos(angle) * radius
        ],
        scale: [2, 2, 2],
        imageUrl: projectImages[i % projectImages.length]
      })
    }
    return temp
  }, [])

  return images.map((props, i) => <FloatingImage key={i} {...props} />)
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      <directionalLight position={[0, 5, 5]} intensity={1} castShadow />
      <hemisphereLight intensity={0.5} groundColor="black" />
      
      <ImageField />
      
      <OrbitControls 
        enableZoom={true}
        minDistance={5}
        maxDistance={25}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        makeDefault
        zoomSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  )
}

export default function Projects() {
  const scrollToSection = (direction) => {
    if (direction === 'prev') {
      const infoSection = document.querySelector('.information-cards')
      if (infoSection) {
        window.scrollTo({
          top: infoSection.offsetTop,
          behavior: 'smooth'
        })
      }
    } else {
      const footerSection = document.querySelector('.footer-section')
      if (footerSection) {
        window.scrollTo({
          top: footerSection.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div 
      className="projects-section bg-red-200" 
      data-scroll="false"
      style={{
        width: '90%',
        maxWidth: '1000px',
        height: '95vh',
        maxHeight: '700px',
        position: 'relative',
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        boxSizing: 'border-box',
        margin: '0 auto',
        borderRadius: '20px'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0'
      }}>
        <NavigationButton 
          onClick={() => scrollToSection('prev')} 
          position="top"
        />

        {/* Container for 3D scene */}
        <div 
          style={{
            width: '100%',
            height: 'calc(100% - 40px)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            margin: '1rem 0',
            touchAction: 'none'
          }}
          onWheel={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Centered heading */}
          <h1 style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#C7C8C4',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontFamily: 'Poppins, sans-serif',
            zIndex: 10,
            margin: 0,
            textAlign: 'center',
            pointerEvents: 'none',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            width: '90%',
            maxWidth: '600px',
            padding: '0 1rem'
          }}>
            Our Projects
          </h1>

          <Canvas
            camera={{ 
              position: [0, 0, 15],
              fov: 60,
              near: 0.1,
              far: 1000
            }}
            style={{ 
              background: '#000000',
              width: '100%',
              height: '100%',
              borderRadius: '20px'
            }}
            onWheel={(e) => {
              e.stopPropagation();
            }}
            onCreated={({ gl }) => {
              gl.domElement.style.touchAction = 'none';
            }}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <NavigationButton 
          onClick={() => scrollToSection('next')} 
          position="bottom"
        />
      </div>

      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: #000000;
          }
          
          .projects-section {
            overflow: hidden;
            background: #000000;
          }
          
          @media (max-width: 768px) {
            .projects-section {
              width: 95%;
              height: 75vh;
              maxHeight: 500px;
              padding: 1.5rem 0;
              borderRadius: 15px;
              background: #000000;
            }
          }

          @media (max-width: 480px) {
            .projects-section {
              width: 98%;
              height: 50vh;
              maxHeight: 400px;
              padding: 1rem 0;
              borderRadius: 12px;
              background: #000000;
            }
          }
        `}
      </style>
    </div>
  )
}