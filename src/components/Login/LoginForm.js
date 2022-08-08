import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form>
      <div className={classes['input-container']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={classes['input-container']}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
    </form>
  );
};

export default LoginForm;
