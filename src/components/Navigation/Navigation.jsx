import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.nav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};
