import pageName2 from '../assets/images/pageName2.jpeg';
import pageName3 from '../assets/images/pageName3.jpeg';
import pageName4 from '../assets/images/pageName4.jpeg';
import MyPagesElement from './MyPagesElement';
import styles from './LeftNavPages.module.scss'
import MyPageElement from './MyPagesElement';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const LeftNavMyPages = ({ newPage }) => {

    const MyPages = [
        {
            imageUrl: pageName2,
            pageName: 'Page name 1',
            id: 0,
            pageLikes: Math.floor(Math.random() * 25),
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 2',
            id: 1,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 3',
            id: 2,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 4',
            id: 3,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 5',
            id: 4,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 6',
            id: 5,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 7',
            id: 6,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 8',
            id: 7,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Page name 9',
            id: 8,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 10',
            id: 9,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Page name 11',
            id: 10,
            pageLikes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Page name 12',
            id: 11,
            pageLikes: Math.floor(Math.random() * 15)
        }
    ]

    // const [myPages, setMyPages] = useState(MyPages)

    // const updateMyPages = (newPage) => {
    //     setMyPages(prevState => {
    //         return [
    //             ...prevState,
    //             newPage
    //         ]
    //     })
    // }

    // useEffect(() => {
    //     if(newPage.pageName !== '') {
    //         setMyPages(prevState => {
    //             return[
    //                 ...prevState, 
    //                 newPage
    //             ]
    //         })
    //     }
    // }, [newPage])

    return (
        <>
            <h3 className={styles.titleLikedPages}>Liked Pages</h3>
            <div className={styles.likedPages}>
                {MyPages.map((myPage) => {
                    return (
                        <MyPagesElement
                            imageUrl={myPage.imageUrl}
                            pageName={myPage.pageName}
                            key={myPage.id}
                            pageLikes={myPage.pageLikes}
                        />
                    )
                })}                  
            </div>
        </>
    )
}

// LeftNavMyPages.propTypes = {
//     newPage: PropTypes.object
// }

export default LeftNavMyPages;

