import { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.tsx'
import './PerfilMaicol.css'

function PerfilMaicol() {
  // useContext — obtener datos del usuario logueado
  const auth = useContext(AuthContext)

  // useParams — leer el parámetro :usuario de la URL
  const { usuario } = useParams<{ usuario: string }>()

  // useState<number> — contador de "me gusta" en la tarjeta
  const [likes, setLikes] = useState<number>(0)

  // useState<string> — última visita leída desde localStorage
  const [ultimaVisita, setUltimaVisita] = useState<string>('')

  // useEffect — registra en localStorage la última vez que se visitó este perfil
  useEffect(() => {
    const clave = `ultimaVisita_${usuario}`
    const visitaAnterior = localStorage.getItem(clave)
    if (visitaAnterior) {
      setUltimaVisita(visitaAnterior)
    }
    localStorage.setItem(clave, new Date().toLocaleString('es-CL'))
  }, [usuario])

  const handleCerrarSesion = () => {
    auth?.cerrarSesion()
  }

  const handleLike = () => {
    setLikes(likes + 1)
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
        {/* ── Cabecera del perfil ── */}
        <div className="perfil-header">
          <div className="perfil-avatar">MA</div>
          <div className="perfil-info">
            <h1>{auth?.usuario?.nombre}</h1>
            <p className="perfil-email">{auth?.usuario?.email}</p>
          </div>
          <button className="perfil-logout" onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </div>

        {/* ── Indicador de ruta (useParams) ── */}
        <div className="maicol-url-badge">
          Perfil activo: <strong>/perfil/{usuario}</strong>
        </div>

        {/* ── Última visita (useEffect + localStorage) ── */}
        {ultimaVisita && (
          <div className="maicol-last-visit">
            🕐 Última visita: {ultimaVisita}
          </div>
        )}

        {/* ── Tarjeta del proyecto: Sistema de Gestión Académica ── */}
        <div className="perfil-card">
          <span className="perfil-card-badge">Laboratorio 1</span>
          <h2 className="perfil-card-title">Sistema de Gestión Académica</h2>
          <p className="perfil-card-description">
            Sistema web completo diseñado para el Liceo José Santos Ossa. Permite administrar
            todo el ciclo escolar: matrícula de estudiantes, registro de notas, asistencia,
            gestión de apoderados y generación de documentos oficiales. Arquitectura MVC con
            base de datos MySQL de 15 tablas, vistas SQL, triggers de validación y auditoría.
          </p>

          <div className="perfil-card-details">
            <div className="perfil-detail">
              <span className="perfil-detail-label">Institución</span>
              <span className="perfil-detail-value">Liceo José Santos Ossa</span>
            </div>
            <div className="perfil-detail">
              <span className="perfil-detail-label">Tipo</span>
              <span className="perfil-detail-value">Proyecto Universitario</span>
            </div>
            <div className="perfil-detail">
              <span className="perfil-detail-label">Estado</span>
              <span className="perfil-detail-value">Completado (v1.0 — 2024)</span>
            </div>
          </div>

          <div className="perfil-card-techs">
            <span className="perfil-tech-tag">PHP</span>
            <span className="perfil-tech-tag">MySQL</span>
            <span className="perfil-tech-tag">JavaScript</span>
            <span className="perfil-tech-tag">CSS</span>
            <span className="perfil-tech-tag">HTML5</span>
            <span className="perfil-tech-tag">MVC</span>
          </div>

          {/* ── Contador de "me gusta" (useState + evento onClick) ── */}
          <div className="maicol-likes">
            <button className="maicol-likes-btn" onClick={handleLike}>
              ❤️ Me gusta
            </button>
            <span className="maicol-likes-count">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilMaicol
