import styles from './LeftNavPages.module.scss'
import LeftNavSuggestedPages from './LeftNavSuggestedPages';
import LeftNavMyPages from './LeftNavMyPages';
import PropTypes from 'prop-types';


const LeftNavPages = ({ newPage }) => {

    return (
        <div className={styles.pages}>
            <LeftNavSuggestedPages />
            <LeftNavMyPages newPage={newPage}/>
        </div>
    )
}

LeftNavPages.propTypes = {
    newPage: PropTypes.object
}

export default LeftNavPages;