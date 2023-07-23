import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './AppBar.module.css';
export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.header}>
      <div>
        <NavLink className={css.nav} to="/">
          Home
        </NavLink>
        <NavLink className={css.nav} to="/contacts">
          Contacts
        </NavLink>
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <Navigation />}</div>
    </header>
  );
};
