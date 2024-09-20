import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

export const Navbar=()=> {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? '' : '',
});
  return (
    <>
        <nav className={style.navbarStyle}>
            <ul>
                <li>
                    <NavLink to="/ByDate" style={activeStyle}>BY DATE</NavLink>
                </li>
                <li>
                    <NavLink to="/" style={activeStyle}>TODAY</NavLink>
                </li>
                <li>
                    <NavLink to="/About" style={activeStyle}>ABOUT</NavLink>
                </li>
            </ul>
        </nav>
    </>
  );
}
