import styles from './LeftNavPages.module.scss'
import LeftNavSuggestedPages from './LeftNavSuggestedPages';
import LeftNavMyPages from './LeftNavMyPages';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


const LeftNavPages = () => {

    // const [newPage, setPage] = useState({
    //     pageName: '',
    //     imageUrl: '',
    //     pageLikes: 0,
    //     id: 0
    // })

    // const updatePages = (newPage) => {
    //     setPage(!newPage)
    // }

    return (
        <div className={styles.pages}>
            <LeftNavSuggestedPages />
            <LeftNavMyPages />
        </div>
    )
}

export default LeftNavPages;