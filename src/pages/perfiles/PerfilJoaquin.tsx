import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.tsx'
import './PerfilJoaquin.css'

function PerfilJoaquin() {
  const auth = useContext(AuthContext)
  const { usuario: usuarioUrl } = useParams<{ usuario: string }>()

  // Estado tipado para el contador de interacciones/me gusta del proyecto
  const [likes, setLikes] = useState<number>(0)

  // Evento onClick para actualizar el estado
  const handleDarLike = () => {
    setLikes((prev) => prev + 1)
  }

  // Validar coincidencia entre usuario de la URL y usuario de sesión (AuthContext)
  const usuarioLogueado = auth?.usuario?.nombre.split(' ')[0].toLowerCase()
  const usuarioCoincide = Boolean(
    usuarioUrl && usuarioLogueado && usuarioUrl.toLowerCase() === usuarioLogueado
  )

  const handleCerrarSesion = () => {
    auth?.cerrarSesion()
  }

  // Iniciales para el avatar
  const iniciales = auth?.usuario?.nombre
    ? auth.usuario.nombre
        .split(' ')
        .map((p) => p[0])
        .join('')
        .toUpperCase()
    : 'JM'

  return (
    <div className="perfil-joaquin">
      <Link to="/" className="perfil-joaquin-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="14" y1="8" x2="2" y2="8" />
          <polyline points="8 14 2 8 8 2" />
        </svg>
        Volver al inicio
      </Link>

      <div className="perfil-joaquin-container">
        {/* Cabecera del perfil */}
        <div className="perfil-joaquin-header">
          <div className="perfil-joaquin-avatar">{iniciales}</div>
          <div className="perfil-joaquin-info">
            <h1>{auth?.usuario?.nombre || 'Joaquin Michea'}</h1>
            <p className="perfil-joaquin-email">{auth?.usuario?.email || 'joaquin@mail.com'}</p>
          </div>
          <button className="perfil-joaquin-logout" onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </div>

        {/* Tarjeta del proyecto Lab 1 */}
        <div className="perfil-joaquin-card">
          {/* Banner de validación con useParams y useContext */}
          <div className={`perfil-joaquin-auth-status ${usuarioCoincide ? 'valid' : 'invalid'}`}>
            <span className="perfil-joaquin-status-dot"></span>
            <span>
              {usuarioCoincide
                ? `Validación exitosa: El usuario en URL "/perfil/${usuarioUrl}" coincide con la sesión de ${auth?.usuario?.nombre}.`
                : `Advertencia: El parámetro de URL "/perfil/${usuarioUrl}" no coincide con el usuario autenticado.`}
            </span>
          </div>

          <span className="perfil-joaquin-badge">Laboratorio 1</span>
          <h2 className="perfil-joaquin-title">AgenteInteligente_LentesGravitacionales</h2>
          <p className="perfil-joaquin-subtitle">Lens Sentinel AI</p>
          <p className="perfil-joaquin-description">
            Lens Sentinel AI es un software de escritorio diseñado para optimizar la detección y validación de lentes gravitacionales (anillos de Einstein) en grandes volúmenes de datos astronómicos.
          </p>

          <div className="perfil-joaquin-details">
            <div className="perfil-joaquin-detail">
              <span className="perfil-joaquin-detail-label">Institución</span>
              <span className="perfil-joaquin-detail-value">Universidad Central (Sede Coquimbo)</span>
            </div>
            <div className="perfil-joaquin-detail">
              <span className="perfil-joaquin-detail-label">Área</span>
              <span className="perfil-joaquin-detail-value">[Área / Línea: Astrofísica Computacional]</span>
            </div>
            <div className="perfil-joaquin-detail">
              <span className="perfil-joaquin-detail-label">Estado</span>
              <span className="perfil-joaquin-detail-value">Entregado</span>
            </div>
            <div className="perfil-joaquin-detail">
              <span className="perfil-joaquin-detail-label">Tipo de Software</span>
              <span className="perfil-joaquin-detail-value">[Software de Escritorio & Inteligencia Artificial]</span>
            </div>
          </div>

          <div className="perfil-joaquin-techs">
            <span className="perfil-joaquin-tech-tag">Python</span>
            <span className="perfil-joaquin-tech-tag">CustomTkinter</span>
            <span className="perfil-joaquin-tech-tag">TensorFlow</span>
            <span className="perfil-joaquin-tech-tag">[FITS / AstroPy]</span>
          </div>

          {/* Sección de estado interactivo (useState & evento onClick) */}
          <div className="perfil-joaquin-stats">
            <div className="perfil-joaquin-stat-item">
              <span className="perfil-joaquin-stat-label">Reconocimientos del proyecto</span>
              <span className="perfil-joaquin-stat-count">{likes}</span>
            </div>

            <button
              type="button"
              className="perfil-joaquin-btn-like"
              onClick={handleDarLike}
              title="Dar reconocimiento al proyecto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>Dar Me Gusta</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilJoaquin
