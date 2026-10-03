# Laboratorio 4: Plataforma con Landing, Login y Perfil de Usuario

> **Asignatura:** Programación de Aplicaciones  
> **Unidad:** Unidad II – Frontend  
> **Tecnologías:** React + TypeScript + Vite + React Router  

---

## Descripción del Proyecto

Este proyecto consiste en una aplicación web interactiva desarrollada con **React** y **TypeScript**, empaquetada con **Vite**. La plataforma implementa un flujo completo de autenticación y navegación que incluye:

1. **Landing Page:** Página informativa de bienvenida con navegación directa al inicio de sesión.
2. **Login:** Formulario de autenticación controlado con validación de estado tipado, el cual guarda la sesión en un contexto global y redirige al perfil.
3. **Perfil de Usuario:** Vista protegida/dinámica que verifica la identidad del usuario logueado mediante la URL y renderiza tarjetas individuales para cada integrante del equipo con hooks de React.

---

## Tecnologías y Herramientas

- **Framework / Librería:** [React 18+](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de compilación:** [Vite](https://vitejs.dev/)
- **Ruteo:** [React Router DOM v6](https://reactrouter.com/)
- **Control de versiones:** Git & GitHub (flujo colaborativo basado en ramas y Pull Requests)

---

## Rutas de la Aplicación

La navegación está configurada con `BrowserRouter`, `Routes` y `Route`:

| Ruta | Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `Landing` | Vista principal con información de la plataforma y enlace a `/login`. |
| `/login` | `Login` | Formulario para ingresar credenciales y autenticar la sesión. |
| `/perfil/:usuario` | `Perfil` | Vista dinámica que muestra la información de sesión y las tarjetas de los integrantes. |

---

## Hooks Utilizados y Funcionalidades

En cumplimiento con los requerimientos del laboratorio, se integraron los siguientes hooks fundamentales:

- **`useContext`**: Consumo global de `AuthContext` para verificar si existe un usuario autenticado y permitir el cierre de sesión (`cerrarSesion`).
- **`useParams`**: Captura del parámetro `:usuario` en la ruta `/perfil/:usuario` para confirmar la coincidencia con el usuario autenticado.
- **`useState`**:
  - Manejo de formularios controlados en `Login` (`useState<string>`).
  - Manejo de estados individuales e interactivos en las tarjetas de perfil (por ejemplo, contadores numéricos `useState<number>`).
- **`useEffect`**:
  - Ejecución de efectos secundarios en las tarjetas de perfil individuales (registro y persistencia de fecha/hora de última visita en `localStorage`).

---

## Flujo de Trabajo Colaborativo (Git & GitHub)

El proyecto fue desarrollado de forma incremental siguiendo buenas prácticas de integración continua:

1. **Estructura base:** Creación de proyecto y definición de rutas integrada en `main`.
2. **Contexto compartido:** Implementación de `AuthContext` y `Landing` integrados vía PR.
3. **Módulo de autenticación:** Implementación del componente `Login` integrado vía PR.
4. **Desarrollo en paralelo (Ramas individuales):** Cada integrante trabajó en su propia rama (`perfil-nombre`) y realizó al menos 5 commits incrementales documentando sus cambios:
   - *Commit 1:* Creación de tarjeta personal con datos de proyectos previos.
   - *Commit 2:* Validación de usuario con `useParams` y `useContext`.
   - *Commit 3:* Definición de estado tipado con `useState`.
   - *Commit 4:* Manejo de eventos de interacción (`onClick`).
   - *Commit 5:* Efecto secundario con `useEffect` y `localStorage`.
5. **Revisión e integración:** Creación y aprobación de Pull Requests individuales hacia `main`, resolviendo conflictos y verificando la compilación en TypeScript.

---

## Instalación y Ejecución Local

Para clonar y ejecutar este proyecto en tu máquina local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/bladingg/labReact.git

# 2. Entrar en la carpeta del proyecto
cd labReact

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
