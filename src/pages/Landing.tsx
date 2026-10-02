import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <span className="landing-badge">React + Vite + TypeScript</span>
        <h1>Lab React</h1>
        <p className="landing-subtitle">
          Proyecto de práctica para explorar el ecosistema de React moderno:
          enrutamiento, componentes, hooks y más.
        </p>
        <Link to="/login" className="landing-cta">
          Iniciar sesión
          <span className="landing-cta-arrow">→</span>
        </Link>
      </section>

      <section className="landing-features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h2>Vite</h2>
          <p>Desarrollo ultrarrápido con HMR y build optimizado.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚛️</div>
          <h2>React 19</h2>
          <p>Componentes funcionales, hooks y las últimas características.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛤️</div>
          <h2>React Router</h2>
          <p>Navegación SPA con rutas dinámicas y parámetros.</p>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Laboratorio de React &mdash; 2026</p>
      </footer>
    </div>
  )
}

export default Landing
