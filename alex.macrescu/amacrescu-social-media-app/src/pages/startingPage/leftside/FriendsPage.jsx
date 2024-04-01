import React from 'react';
import styles from './FriendsPage.module.scss';


const FriendsPage = () => {
    return (
        <div className={styles.friendsContainer}>
            <h2>Pagina Prieteni</h2>
            <div className={styles.friendItem}>
                <span className={styles.friendName}>Numele Prenumele</span>
                <span className={styles.friendEmail}>email@exemple.com</span>
            </div>
            <div className={styles.friendItem}>
                <span className={styles.friendName}>Numele2 Prenumele2</span>
                <span className={styles.friendEmail}>email2@exemple.com</span>
            </div>
            {/* Alte elemente ale listei de prieteni */}
        </div>
    );
};

export default FriendsPage;