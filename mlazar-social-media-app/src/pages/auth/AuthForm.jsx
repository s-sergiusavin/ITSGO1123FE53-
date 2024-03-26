import { useState } from 'react';
import styles from './AuthForm.module.scss'

const AuthForm = () => {
    const [IsLogin, setIsLogin] = useState(true);
    const [IsError, setIsError] = useState(false);
    const [IsLoading, setIsLoading] = useState(flase);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate();


    const toggleAuthState = () => {
        setIsLogin(prevState)
    }

    const submitHandler = (event) => {
        event.preventDefault()

    }

    const actionIsNotLoading = (
        <button> {IsLogin ? 'Login' : 'Create new account'}</button>
    )



    return (
        <div className={styles.auth}>
            <h2>{IsLogin ? 'Login' : 'Create new account'}</h2>
            <form onSubmit={submitHandler} autoComplete='off' noValidate>
                <div className={styles.control}>
                    <label htmlFor="Username">Username</label>
                    <input type="text"
                        id='username'
                        placeholder='Enter your Username'
                        required onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id='password'
                        placeholder='Enter your password'
                        required onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.actions}>
                    {IsError && <p>Please try again</p>}
                    {IsLoading && <p>Sending request...</p>}
                    {!IsLoading && actionIsNotLoading}

                    <button type='button' className={styles.toggle} onClick={toggleAuthState}>
                        {IsLogin ? 'Create new account' : 'Login with an existing account'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm