import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import './Header.css';

const Header = () => {
  // Estilos como objetos constantes fuera del componente para mejor rendimiento
  const styles = {
    active: {
      borderBottom: `2px solid var(--accent-blue)`,
      padding: "4px 0",
      textAlign: "center",
      fontWeight: "bold",
      color: "var(--accent-blue)",
      textDecoration: "none",
      transition: "color 0.3s ease" // Añadida transición suave
    },
    button: {
      color: "var(--light-text)",
      padding: "0 16px",
      textAlign: "center",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "color 0.3s ease", // Añadida transición suave
      '&:hover': {
        color: "var(--neon-blue)" // Efecto hover
      }
    }
  };

  return (
    <>
      <nav className='header_container'>
        <Link to='/' className='logo-link'>
          <p>Aluraflix</p>
        </Link>
        <ul className='buttons_menu_container'>
          {[
            { path: '/', label: 'HOME' },
            { path: '/nuevo-video', label: 'NUEVO VIDEO' }
          ].map(({ path, label }) => (
            <li className='li' key={path}>
              <NavLink 
                to={path} 
                style={({ isActive }) => 
                  isActive ? styles.active : styles.button
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='tabBar'>
        <Link to='/' aria-label="Ir a inicio">
          <FaHome />
        </Link>
        <Link to='/nuevo-video' aria-label="Crear nuevo video">
          <div className='new_video_icon'>
            <IoAddCircleOutline />
            <p>Nuevo Video</p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export { Header };