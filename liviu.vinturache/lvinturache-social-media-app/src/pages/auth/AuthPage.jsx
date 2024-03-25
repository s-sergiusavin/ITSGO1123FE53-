import AuthForm from "./AuthForm";
import logo from '../../assets/images/logo.jpg';
import styles from './AuthPage.module.scss'
import useMediaQuery from '../../hooks/useMediaQuery';






const AuthPage = () => {


    const MediaResponsive = ({isDesktop}) => (
        <nav className={`base ${isDesktop ? "desktop" : "mobile"}`}>
          <Icon />
        </nav>
      );

      const Icon = () => (
        <img src={logo}
        alt='login image'
        className={styles.logoImage}>
        </img>
      );

    const isDesktop = useMediaQuery('(min-width: 1020px)');

    return (

        <>
        <div className={styles.mainContainer}>
        <div className="App">
            {/* {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>} */}
            <MediaResponsive isDesktop={isDesktop}/>
        </div>

        <div className={styles.logoDescription}>
            <h1>funtime</h1>
            <div className={styles.logoQuote}>
                <p>Explore and share your experience </p>
            </div>
        </div>
        </div>

            <AuthForm />
        </>


     )


}

export default AuthPage;
