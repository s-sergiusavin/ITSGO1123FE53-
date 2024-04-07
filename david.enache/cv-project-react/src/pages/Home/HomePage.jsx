
import React from 'react';
import myImg from '../images/myImg.jpg'
import styles from './HomePage.module.scss'
import Footer from '../../components/Footer/Footer';
import AnimatedElement from './AnimatedElement';

const HomePage = () => {    
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                   <img src={myImg}alt="myImg" className={styles.myImg} />
            </div>

      <div className={styles.textContainer}>
                    <h2 className={styles.Header}>My name is Enache David welcome to my website 
                    where I have created it to present my CV to you.</h2>
            </div>



            <AnimatedElement></AnimatedElement>

            <Footer></Footer>
        </div>
      
    )
 
}
     
export default HomePage;
