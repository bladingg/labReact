import { useContext } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.tsx'

// ── Importar el perfil de cada integrante ──
import PerfilChristian from './perfiles/PerfilChristian.tsx'
// import PerfilMaicol from './perfiles/PerfilMaicol.tsx'
// import PerfilJoaquin from './perfiles/PerfilJoaquin.tsx'

// Mapa de componentes por usuario
const PERFILES: Record<string, React.ComponentType> = {
  christian: PerfilChristian,
  // maicol: PerfilMaicol,
  // joaquin: PerfilJoaquin,
}

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

  // Renderizar el componente de perfil correspondiente
  const ComponentePerfil = usuarioUrl ? PERFILES[usuarioUrl] : null

  if (!ComponentePerfil) {
    return <Navigate to="/" replace />
  }

  return <ComponentePerfil />
}

export default Perfil
