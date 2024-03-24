import styles from './LeftNavPages.module.scss'
import LeftNavSuggestedPages from './LeftNavSuggestedPages';
import LeftNavMyPages from './LeftNavMyPages';
import { useState } from 'react';


const LeftNavPages = () => {

    // const [myPage, setMyPage] = useState({
    //     pageName: '',
    //     imageUrl: '',
    //     id: 0,
    //     likes: 0
    // })

    // const updateMyPages = (newPage) => {
    //     setMyPage(newPage)
    // }

    return (
        <div className={styles.pages}>
            <LeftNavSuggestedPages newPage={myPage}/>
            <LeftNavMyPages updateThePages={updateMyPages}/>
        </div>
    )
}

export default LeftNavPages;