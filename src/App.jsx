import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'
import './App.css'

function LoadingScreen({ onLoadComplete }) {
  const [progress, setProgress] = useState(0)
  const [cryptoPrice, setCryptoPrice] = useState(0.000001)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadComplete(), 500)
          return 100
        }
        return prev + 2
      })
      
      // Анимация цены криптовалюты
      setCryptoPrice(prev => prev + Math.random() * 0.000001)
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Киберпанк логотип */}
        <div className="cyber-logo">
          <div className="logo-text">
            <span className="glitch" data-text="FENT">FENT</span>
          </div>
          <div className="logo-subtitle">
            DECENTRALIZED • FUTURE • BLOCKCHAIN
          </div>
        </div>

        {/* Криптовалютная информация */}
        <div className="crypto-info">
          <div className="crypto-price">
            <span className="price-label">FENT/USD</span>
            <span className="price-value">${cryptoPrice.toFixed(6)}</span>
            <span className="price-change">+∞%</span>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="progress-container">
          <div className="progress-label">INITIALIZING BLOCKCHAIN...</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}% COMPLETE</div>
        </div>

        {/* Хакерские строки */}
        <div className="hacker-lines">
          <div className="line">{'>'} Connecting to mainnet...</div>
          <div className="line">{'>'} Loading smart contracts...</div>
          <div className="line">{'>'} Syncing blockchain data...</div>
          <div className="line">{'>'} Preparing 3D universe...</div>
        </div>
      </div>

      {/* Фоновая анимация */}
      <div className="loading-bg">
        <div className="bg-lines"></div>
        <div className="bg-particles"></div>
      </div>
    </div>
  )
}

function Earth({ onPlanetClick, isActive }) {
  const earthRef = useRef()
  
  // Анимация вращения Земли
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002 // Чуть быстрее
      earthRef.current.rotation.x += 0.0005 // Небольшой наклон
    }
  })

  return (
    <group ref={earthRef} onClick={() => onPlanetClick('earth')}>
      {/* Реалистичная модель Земли */}
      <mesh>
        <sphereGeometry args={[2, 512, 512]} />
        <meshStandardMaterial
          color="#1e90ff"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Континенты */}
      <mesh>
        <sphereGeometry args={[2.002, 512, 512]} />
        <meshStandardMaterial
          color="#228b22"
          roughness={0.6}
          metalness={0.05}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Облака */}
      <mesh>
        <sphereGeometry args={[2.05, 256, 256]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0}
        />
      </mesh>
      
      {/* Атмосфера */}
      <mesh>
        <sphereGeometry args={[2.2, 128, 128]} />
        <meshStandardMaterial
          color="#87ceeb"
          transparent
          opacity={0.1}
          emissive="#87ceeb"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Северное сияние */}
      <mesh>
        <sphereGeometry args={[2.2, 256, 256]} />
        <meshStandardMaterial
          color="#00ff88"
          transparent
          opacity={0.3}
          emissive="#00ff88"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

// Функции создания текстур
function createOceanTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Градиент океана
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256)
  gradient.addColorStop(0, '#0066cc')
  gradient.addColorStop(0.7, '#004499')
  gradient.addColorStop(1, '#002266')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)
  
  // Волны
  for (let i = 0; i < 100; i++) {
    ctx.strokeStyle = `rgba(0, 102, 204, ${0.3 + Math.random() * 0.4})`
    ctx.lineWidth = 1 + Math.random() * 3
    ctx.beginPath()
    ctx.moveTo(Math.random() * 512, Math.random() * 512)
    ctx.lineTo(Math.random() * 512, Math.random() * 512)
    ctx.stroke()
  }
  
  return canvas
}

function createContinentTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Фон
  ctx.fillStyle = '#00cc44'
  ctx.fillRect(0, 0, 512, 512)
  
  // Континенты
  ctx.fillStyle = '#009933'
  ctx.beginPath()
  ctx.ellipse(150, 200, 80, 60, 0, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.beginPath()
  ctx.ellipse(350, 150, 70, 50, 0, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.beginPath()
  ctx.ellipse(250, 350, 90, 70, 0, 0, Math.PI * 2)
  ctx.fill()
  
  // Детали
  ctx.fillStyle = '#006622'
  for (let i = 0; i < 50; i++) {
    ctx.beginPath()
    ctx.arc(Math.random() * 512, Math.random() * 512, 5 + Math.random() * 15, 0, Math.PI * 2)
    ctx.fill()
  }
  
  return canvas
}

function createMountainTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Фон
  ctx.fillStyle = '#cc6600'
  ctx.fillRect(0, 0, 512, 512)
  
  // Горы
  ctx.fillStyle = '#996600'
  for (let i = 0; i < 20; i++) {
    ctx.beginPath()
    ctx.moveTo(Math.random() * 512, 512)
    ctx.lineTo(Math.random() * 512, 200 + Math.random() * 200)
    ctx.lineTo(Math.random() * 512, 512)
    ctx.fill()
  }
  
  // Кратеры
  ctx.fillStyle = '#664400'
  for (let i = 0; i < 30; i++) {
    ctx.beginPath()
    ctx.arc(Math.random() * 512, Math.random() * 512, 10 + Math.random() * 20, 0, Math.PI * 2)
    ctx.fill()
  }
  
  return canvas
}

function createAtmosphereTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Градиент атмосферы
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256)
  gradient.addColorStop(0, 'rgba(0, 204, 255, 0.8)')
  gradient.addColorStop(0.5, 'rgba(0, 153, 204, 0.4)')
  gradient.addColorStop(1, 'rgba(0, 102, 153, 0.1)')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)
  
  return canvas
}

function createCloudTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Облака
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  for (let i = 0; i < 40; i++) {
    ctx.beginPath()
    ctx.arc(Math.random() * 512, Math.random() * 512, 20 + Math.random() * 40, 0, Math.PI * 2)
    ctx.fill()
  }
  
  return canvas
}

function createAuroraTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  // Северное сияние
  ctx.fillStyle = 'rgba(0, 255, 136, 0.8)'
  for (let i = 0; i < 15; i++) {
    ctx.beginPath()
    ctx.ellipse(
      Math.random() * 512, 
      Math.random() * 512, 
      30 + Math.random() * 50, 
      10 + Math.random() * 20, 
      Math.random() * Math.PI, 
      0, 
      Math.PI * 2
    )
    ctx.fill()
  }
  
  return canvas
}

function SunPlanet({ sunRef, onPlanetClick }) {
  return (
    <mesh ref={sunRef} position={[80, 0, 0]} onClick={() => onPlanetClick('sun')}>
      <sphereGeometry args={[15, 128, 128]} />
      <meshStandardMaterial
        color="#ffa500"
        emissive="#ff8c00"
        emissiveIntensity={2.5}
        roughness={1.0}
        metalness={0}
      />
    </mesh>
  )
}

function MoonPlanet({ moonRef, onPlanetClick }) {
  return (
    <mesh ref={moonRef} position={[0, 0, -20]} onClick={() => onPlanetClick('moon')}>
      <sphereGeometry args={[1.2, 128, 128]} />
      <meshStandardMaterial
        color="#c0c0c0"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

function MarsLikePlanet({ planetRef, onPlanetClick, position, planetName }) {
  return (
    <mesh ref={planetRef} position={position} onClick={() => onPlanetClick(planetName)}>
      <sphereGeometry args={[2, 128, 128]} />
      <meshStandardMaterial
        color="#cd5c5c"
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  )
}

function VenusPlanet({ planetRef, onPlanetClick, position, planetName }) {
  return (
    <mesh ref={planetRef} position={position} onClick={() => onPlanetClick(planetName)}>
      <sphereGeometry args={[1.8, 128, 128]} />
      <meshStandardMaterial
        color="#ffc649"
        roughness={0.6}
        metalness={0.2}
      />
    </mesh>
  )
}

function JupiterPlanet({ planetRef, onPlanetClick, position, planetName }) {
  return (
    <mesh ref={planetRef} position={position} onClick={() => onPlanetClick(planetName)}>
      <sphereGeometry args={[2.2, 128, 128]} />
      <meshStandardMaterial
        color="#d2691e"
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  )
}

function FuturisticSpace({ onPlanetClick, activePlanet }) {
  const asteroidsRef = useRef()
  const sunRef = useRef()
  const sunCoronaRef = useRef()
  const moonRef = useRef()
  const moonFieldRef = useRef()
  const planet1Ref = useRef()
  const planet1FieldRef = useRef()
  const planet2Ref = useRef()
  const planet2FieldRef = useRef()
  const planet3Ref = useRef()
  const planet3FieldRef = useRef()
  const saturnRef = useRef()
  
  useFrame((state) => {
    if (asteroidsRef.current) {
      asteroidsRef.current.rotation.y += 0.0003
    }
    
    // Вращение планет вокруг своей оси
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005 // Солнце вращается быстрее
      sunRef.current.rotation.x += 0.002
    }
    if (sunCoronaRef.current) {
      sunCoronaRef.current.rotation.y -= 0.003 // Корона вращается в обратную сторону
      sunCoronaRef.current.rotation.z += 0.004
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.003
      moonRef.current.rotation.z += 0.001
    }
    if (moonFieldRef.current) {
      moonFieldRef.current.rotation.x += 0.008 // Энергетическое поле быстро
    }
    if (planet1Ref.current) {
      planet1Ref.current.rotation.y += 0.004
      planet1Ref.current.rotation.x += 0.002
    }
    if (planet1FieldRef.current) {
      planet1FieldRef.current.rotation.y -= 0.007 // Лава в обратную сторону
    }
    if (planet2Ref.current) {
      planet2Ref.current.rotation.y += 0.0035
      planet2Ref.current.rotation.z += 0.0015
    }
    if (planet2FieldRef.current) {
      planet2FieldRef.current.rotation.z += 0.006 // Биощит пульсирует
    }
    if (planet3Ref.current) {
      planet3Ref.current.rotation.y += 0.0025
      planet3Ref.current.rotation.x += 0.001
    }
    if (planet3FieldRef.current) {
      planet3FieldRef.current.rotation.y -= 0.004 // Кристальный щит
      planet3FieldRef.current.rotation.x += 0.005
    }
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.006 // Кольца вращаются быстро
      saturnRef.current.rotation.z += 0.003
    }
  })

  return (
    <group>
      {/* Звёзды */}
      <Stars 
        radius={200} 
        depth={200} 
        count={15000} 
        factor={8} 
        saturation={1.0} 
        fade 
        speed={2} 
      />
      

      

      

      
      {/* Солнце - реалистичное */}
      <SunPlanet sunRef={sunRef} onPlanetClick={onPlanetClick} />
      {/* Солнечная корона - голографический эффект */}
      <mesh ref={sunCoronaRef} position={[80, 0, 0]}>
        <sphereGeometry args={[18, 64, 64]} />
        <meshStandardMaterial
          color="#ff0080"
          emissive="#ff0080"
          emissiveIntensity={1.5}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      {/* Луна - реалистичная */}
      <MoonPlanet moonRef={moonRef} onPlanetClick={onPlanetClick} />
      {/* Луна - энергетическое поле */}
      <mesh ref={moonFieldRef} position={[0, 0, -20]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#00ff80"
          emissive="#00ff80"
          emissiveIntensity={0.8}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      
      {/* Планета 1 - Марс */}
      <MarsLikePlanet planetRef={planet1Ref} onPlanetClick={onPlanetClick} position={[15, -20, -30]} planetName="planet1" />
      {/* Планета 1 - Лава поток */}
      <mesh ref={planet1FieldRef} position={[15, -20, -30]}>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffff00"
          emissiveIntensity={1.0}
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>
      
      {/* Планета 2 - Венера */}
      <VenusPlanet planetRef={planet2Ref} onPlanetClick={onPlanetClick} position={[-30, 10, -25]} planetName="planet2" />
      {/* Планета 2 - Биощит */}
      <mesh ref={planet2FieldRef} position={[-30, 10, -25]}>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshStandardMaterial
          color="#80ff80"
          emissive="#80ff80"
          emissiveIntensity={0.6}
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>
      
      {/* Планета 3 - Юпитер */}
      <JupiterPlanet planetRef={planet3Ref} onPlanetClick={onPlanetClick} position={[40, -15, 20]} planetName="planet3" />
      {/* Планета 3 - Кристальный щит */}
      <mesh ref={planet3FieldRef} position={[40, -15, 20]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#80ffff"
          emissive="#80ffff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      {/* Энергетические кольца */}
      <group ref={saturnRef} position={[15, -20, -30]} onClick={() => onPlanetClick('saturn')}>
        <mesh>
          <torusGeometry args={[3, 0.2, 16, 64]} />
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={2.5}
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
        <mesh>
          <torusGeometry args={[3.5, 0.1, 16, 64]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={2.0}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </group>
    </group>
  )
}

function App() {
  const [copied, setCopied] = useState(false)
  const [activePlanet, setActivePlanet] = useState('earth')
  const [cameraTarget, setCameraTarget] = useState({ x: 0, y: 0, z: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const CONTRACT = '0x1234567890abcdef1234567890abcdef12345678'

  // Позиции камеры для каждой планеты
  const planetPositions = {
    earth: { x: 0, y: 0, z: 0 },
    ship1: { x: 25, y: 15, z: 30 },
    ship2: { x: -22, y: -12, z: 35 },
    ship3: { x: 0, y: 25, z: 40 },
    sun: { x: 80, y: 0, z: 0 },
    moon: { x: 0, y: 0, z: -20 },
    planet1: { x: 15, y: -20, z: -30 },
    planet2: { x: -30, y: 10, z: -25 },
    planet3: { x: 40, y: -15, z: 20 },
    saturn: { x: 15, y: -20, z: -30 }
  }

  const handlePlanetClick = (planetName) => {
    setActivePlanet(planetName)
    setCameraTarget(planetPositions[planetName])
  }

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />
  }

  return (
    <div className="AppRoot">
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }} className="three-canvas">
        <ambientLight intensity={0.15} />
        <pointLight position={[80, 0, 0]} intensity={4} color="#ffff00" />
        <pointLight position={[0, 20, 20]} intensity={0.4} color="#00ccff" />
        
        <FuturisticSpace onPlanetClick={handlePlanetClick} activePlanet={activePlanet} />
        <Earth onPlanetClick={handlePlanetClick} isActive={activePlanet === 'earth'} />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={8}
          maxDistance={30}
          autoRotate={true}
          autoRotateSpeed={0.2}
          target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]}
        />
      </Canvas>
      
      <div className="logo-top">
        <div className="logo-svg">
          <div className="cyber-logo-main">
            <span className="glitch-main" data-text="FENT">FENT</span>
            <div className="logo-cyber-subtitle">DECENTRALIZED UNIVERSE</div>
          </div>
        </div>
      </div>
      
      {/* Инструкции справа */}
      <div className="instructions">
        <div className="instruction-text">Scroll = zoom / dézoom</div>
        <div className="instruction-text">Right-click = laser</div>
        <div className="instruction-text">Click planets to fly to them</div>
      </div>
      
      {/* Контракт внизу слева */}
      <div className="contract-section">
        <div className="contract-label">Contract:</div>
        <div className="contract-address">4i6qgzGVhpE3zLQH3kVjFBaDBjoitvSiKmTY5Ho3pump</div>
        <button
          className="copy-contract-btn"
          onClick={() => {
            navigator.clipboard.writeText("4i6qgzGVhpE3zLQH3kVjFBaDBjoitvSiKmTY5Ho3pump")
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
        >
          Copy contract
        </button>
        {copied && <div className="copy-toast">Copied!</div>}
      </div>
      
      {/* Ссылки внизу справа */}
      <div className="social-links">
        <a href="#" target="_blank" className="social-btn">Twitter</a>
        <a href="#" target="_blank" className="social-btn">PumpFun</a>
        <a href="#" target="_blank" className="social-btn">Dexscreener</a>
      </div>
    </div>
  )
}

export default App

