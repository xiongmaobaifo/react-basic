import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test/Test'
import './App.css'


function App() {
  return (
    <>
      <nav style={{ padding: '10px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'inherit' }}>Home</Link>
        <Link to="/about" style={{ color: '#646cff', textDecoration: 'inherit' }}>About</Link>
        <Link to="/test" style={{ color: '#646cff', textDecoration: 'inherit' }}>Test</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  )
}

export default App
