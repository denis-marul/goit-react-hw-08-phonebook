import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <div className={css.userMenu}>
      <p className={css.mail}>{userEmail}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
