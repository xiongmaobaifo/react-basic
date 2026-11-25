import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../App.css'
import { useAppStore } from '../store/useStore'

function Home() {
  const { count, increment, user, setUser } = useAppStore()

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Home Page</h1>
          <p>
            Welcome, <strong>{user}</strong>!
          </p>
          <div style={{ margin: '10px 0' }}>
            <input 
              type="text" 
              placeholder="Change name"
              onChange={(e) => setUser(e.target.value)}
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>
        <button
          className="counter"
          onClick={increment}
        >
          Global Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>About</h2>
          <p>Visit our about page to learn more.</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Home
