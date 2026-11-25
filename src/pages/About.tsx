import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useAppStore } from '../store/useStore'
import { fetchUsers, type User } from '../api/userApi'

function About() {
  const { user, count } = useAppStore()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Page</h1>
      <p>Hello <strong>{user}</strong>, the current global count is: {count}</p>
      
      <div style={{ margin: '20px 0', textAlign: 'left', display: 'inline-block' }}>
        <h3>Users (Fetched via Axios):</h3>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.slice(0, 5).map(u => (
              <li key={u.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee' }}>
                {u.name} ({u.email})
              </li>
            ))}
          </ul>
        )}
      </div>

      <p>This is a simple About page to demonstrate routing, global state, and API fetching.</p>
      <Link to="/" style={{ color: '#646cff', textDecoration: 'inherit' }}>
        Go back to Home
      </Link>
    </div>
  )
}

export default About
