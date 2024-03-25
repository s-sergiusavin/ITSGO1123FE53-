import styles from "./MyProfile.module.scss";

const MyProfile = () => {
    return (
        <div className={styles.myProfileContainer}>
            <header className={styles.myProfileHeader}></header>
            <div className={styles.myProfileSections}>
                <section className={styles.myProfileLeftSection}></section>
                <section className={styles.myProfileRightSection}></section>
            </div>

        </div>
    )
}

export default MyProfile;