import { useState, useContext, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.tsx'
import './Login.css'

// Credenciales válidas
const USUARIOS_VALIDOS = [
  { usuario: 'maicol',    contrasena: 'maicol123',    nombre: 'Maicol Aracena' },
  { usuario: 'christian', contrasena: 'christian123', nombre: 'Christian Salazar' },
  { usuario: 'joaquin',   contrasena: 'joaquin123',   nombre: 'Joaquin Michea' },
]

function Login() {
  const [usuario, setUsuario] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!usuario.trim() || !contrasena.trim()) {
      setError('Completa ambos campos.')
      return
    }

    const encontrado = USUARIOS_VALIDOS.find(
      (u) => u.usuario === usuario.trim().toLowerCase() && u.contrasena === contrasena
    )

    if (!encontrado) {
      setError('Usuario o contraseña incorrectos.')
      return
    }

    auth?.iniciarSesion({ nombre: encontrado.nombre, email: `${encontrado.usuario}@mail.com` })
    navigate(`/perfil/${encontrado.usuario}`)
  }

  return (
    <div className="login">
      <form className="login-card" onSubmit={handleSubmit}>
        <Link to="/" className="login-back">← Volver</Link>

        <h1>Iniciar sesión</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

        {error && <p className="login-error">{error}</p>}

        <label className="login-label" htmlFor="usuario">
          Usuario
        </label>
        <input
          id="usuario"
          className="login-input"
          type="text"
          placeholder="ej: joaquin"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label className="login-label" htmlFor="contrasena">
          Contraseña
        </label>
        <input
          id="contrasena"
          className="login-input"
          type="password"
          placeholder="Tu contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button className="login-btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
