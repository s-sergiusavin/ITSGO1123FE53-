import styles from './LeftNavPages.module.scss'
import LeftNavSuggestedPages from './LeftNavSuggestedPages';
import LeftNavMyPages from './LeftNavMyPages';


const LeftNavPages = () => {

    return (
        <div className={styles.pages}>
            <LeftNavSuggestedPages />
            <LeftNavMyPages />
        </div>
    )
}

export default LeftNavPages;