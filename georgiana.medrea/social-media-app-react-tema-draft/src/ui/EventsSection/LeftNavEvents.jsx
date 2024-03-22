import styles from './LeftNavEvent.module.scss';
import LeftNavSuggestedEvents from "./LeftNavSuggestedEvents";
import LeftNavMyEvents from './LeftNavMyEvents';

const LeftNavEvents = () => {
    return (
        <div className={styles.events}>
            <LeftNavSuggestedEvents />
            <LeftNavMyEvents />
        </div>
    )
}

export default LeftNavEvents;