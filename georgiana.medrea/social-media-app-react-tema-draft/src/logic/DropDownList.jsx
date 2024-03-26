import styles from './MyProfile.module.scss'

const DropDownList = () => {
    return (
        <div>
            <ul className={styles.dropDownListItems}>
                <button className={styles.dropDownDelete}>Delete post</button>
                <button className={styles.dropDownHide}>Hide from profile</button>
            </ul>
        </div>
    )
}

export default DropDownList;