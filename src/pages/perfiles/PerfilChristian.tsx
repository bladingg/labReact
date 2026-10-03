import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.tsx'
import './PerfilChristian.css'

function PerfilChristian() {
  const auth = useContext(AuthContext)

  // Estado propio: contador de "Me gusta" con useState
  const [likes, setLikes] = useState(46830)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  // Estado para mostrar la última visita
  const [ultimaVisita, setUltimaVisita] = useState<string | null>(null)

  // useEffect: guarda en localStorage la última vez que se visitó el perfil
  useEffect(() => {
    const clave = 'ultimaVisita_christian'
    const visitaAnterior = localStorage.getItem(clave)
    if (visitaAnterior) {
      setUltimaVisita(visitaAnterior)
    }
    // Guardar la visita actual
    const ahora = new Date().toLocaleString('es-CL')
    localStorage.setItem(clave, ahora)
  }, [])

  const handleCerrarSesion = () => {
    auth?.cerrarSesion()
  }

  return (
    <div className="perfil">
      <Link to="/" className="perfil-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="14" y1="8" x2="2" y2="8" />
          <polyline points="8 14 2 8 8 2" />
        </svg>
        Volver al inicio
      </Link>

      <div className="perfil-container">
        {/* Cabecera del perfil */}
        <div className="perfil-header">
          <div className="perfil-avatar">CS</div>
          <div className="perfil-info">
            <h1>{auth?.usuario?.nombre}</h1>
            <p className="perfil-email">{auth?.usuario?.email}</p>
            {ultimaVisita && (
              <p className="perfil-last-visit">Última visita: {ultimaVisita}</p>
            )}
          </div>
          <button className="perfil-logout" onClick={handleCerrarSesion}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar sesión
          </button>
        </div>

        {/* Tarjeta del proyecto Lab 1 */}
        <div className="perfil-card">
          <span className="perfil-card-badge">Laboratorio 1</span>
          <h2 className="perfil-card-title">Turnero Ucen</h2>
          <p className="perfil-card-description">
            Sistema de gestión y llamado de turnos para los procesos de Admisión y Matrículas
            de la Universidad Central, Sede Coquimbo. Organiza y deriva a los usuarios según
            el trámite a realizar, reduciendo la congestión en salas de atención.
          </p>

          <div className="perfil-card-details">
            <div className="perfil-detail">
              <span className="perfil-detail-label">Institución</span>
              <span className="perfil-detail-value">Universidad Central (Sede Coquimbo)</span>
            </div>
            <div className="perfil-detail">
              <span className="perfil-detail-label">Área</span>
              <span className="perfil-detail-value">Admisión, Registro Curricular y Matrículas</span>
            </div>
            <div className="perfil-detail">
              <span className="perfil-detail-label">Estado</span>
              <span className="perfil-detail-value">Entregado</span>
            </div>
          </div>

          <div className="perfil-card-techs">
            <span className="perfil-tech-tag">PHP</span>
            <span className="perfil-tech-tag">JavaScript</span>
            <span className="perfil-tech-tag">CSS</span>
            <span className="perfil-tech-tag">HTML5</span>
          </div>

          {/* Botón de Me gusta con useState */}
          <div className="perfil-card-like">
            <button
              className={`perfil-like-btn${liked ? ' liked' : ''}`}
              onClick={handleLike}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>{likes}</span>
            </button>
            <span className="perfil-like-label">Me gusta</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilChristian
