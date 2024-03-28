import FriendRequestsList from './FriendRequestsList.jsx'
import FriendsList from "./FriendsList.jsx";
import SuggestedFriends from "./SuggestedFriends.jsx";
import styles from './Friends.module.scss'

const Friends = () => {
    return (
        <div className={styles.friendsCotainer}>
            <FriendsList />
            <div className={styles.requests}>
                <FriendRequestsList />
                <SuggestedFriends />
            </div>

        </div>
    )
}

export default Friends;