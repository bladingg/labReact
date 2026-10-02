import { useContext } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.tsx'

function Perfil() {
  const { usuario: usuarioUrl } = useParams<{ usuario: string }>()
  const auth = useContext(AuthContext)

  // Si no hay sesión iniciada, redirigir al login
  if (!auth?.usuario) {
    return <Navigate to="/login" replace />
  }

  // Validar que el usuario de la URL coincida con el usuario logueado
  const nombreUsuario = auth.usuario.nombre.split(' ')[0].toLowerCase()
  if (usuarioUrl !== nombreUsuario) {
    return <Navigate to={`/perfil/${nombreUsuario}`} replace />
  }

  return (
    <div className="perfil">
      <p>Bienvenido, {auth.usuario.nombre}</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default Perfil
