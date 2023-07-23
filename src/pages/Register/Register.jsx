import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './Register.module.css';
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
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
        Register
      </button>
    </form>
  );
};

export default Register;
