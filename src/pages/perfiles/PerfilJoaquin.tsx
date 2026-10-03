import { Link } from 'react-router-dom'
import './PerfilJoaquin.css'

function PerfilJoaquin() {
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
          <div className="perfil-joaquin-avatar">JM</div>
          <div className="perfil-joaquin-info">
            <h1>Joaquin Michea</h1>
            <p className="perfil-joaquin-email">joaquin@mail.com</p>
          </div>
          <button className="perfil-joaquin-logout">
            Cerrar sesión
          </button>
        </div>

        {/* Tarjeta del proyecto Lab 1 */}
        <div className="perfil-joaquin-card">
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
        </div>
      </div>
    </div>
  )
}

export default PerfilJoaquin
