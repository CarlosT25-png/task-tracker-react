import LoginForm from "./LoginForm";
import Button from "../UI/Button";
import classes from './Login.module.css';

const Login = () => {
    return <div className={classes.wrapper}>
        <h3 className={classes['heading-3']}>Task Tracker</h3>
        <LoginForm />
        <Button>Login</Button>
    </div>
}

export default Login;