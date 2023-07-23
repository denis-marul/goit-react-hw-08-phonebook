import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.formInput}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.formInput}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button className={css.submitBtn} type="Submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
