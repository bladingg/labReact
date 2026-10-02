import { useState, useContext, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.tsx'
import './Login.css'

function Login() {
  const [usuario, setUsuario] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!usuario.trim() || !contrasena.trim()) return

    auth?.iniciarSesion({ nombre: usuario, email: `${usuario}@mail.com` })
    navigate(`/perfil/${usuario}`)
  }

  return (
    <div className="login">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

        <label className="login-label" htmlFor="usuario">
          Usuario
        </label>
        <input
          id="usuario"
          className="login-input"
          type="text"
          placeholder="Tu nombre de usuario"
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
