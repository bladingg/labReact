import { createContext, useState, type ReactNode } from 'react'

// Interfaces
export interface Usuario {
  nombre: string
  email: string
}

export interface AuthContextType {
  usuario: Usuario | null
  iniciarSesion: (usuario: Usuario) => void
  cerrarSesion: () => void
}

// Context con valor por defecto undefined (se valida al consumir)
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const iniciarSesion = (datosUsuario: Usuario) => {
    setUsuario(datosUsuario)
  }

  const cerrarSesion = () => {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}
