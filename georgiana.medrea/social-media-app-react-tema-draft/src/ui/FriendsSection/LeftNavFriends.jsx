import LeftNavFriendRequests from "./LeftNavFriendRequests";
import LeftNavFriendsList from "./LeftNavFriendsList";
import LeftNavSuggestedFriends from "./LeftNavSuggestedFriends";
import styles from './LeftNavFriends.module.scss'

const LeftNavFriends = () => {
    return (
        <div className={styles.friendsCotainer}>
            <LeftNavFriendsList />
            <div className={styles.requests}>
                <LeftNavFriendRequests />
                <LeftNavSuggestedFriends />
            </div>

        </div>
    )
}

export default LeftNavFriends;