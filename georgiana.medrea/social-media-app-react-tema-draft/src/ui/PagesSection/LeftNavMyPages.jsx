import pageName2 from '../assets/images/pageName2.jpeg';
import pageName3 from '../assets/images/pageName3.jpeg';
import pageName4 from '../assets/images/pageName4.jpeg';
import MyPagesElement from './MyPagesElement';
import styles from './LeftNavPages.module.scss'
import PropTypes from 'prop-types';


const LeftNavMyPages = ({ newPage }) => {

    const MyPages = [
        {
            imageUrl: pageName2,
            pageName: 'Event name 1',
            id: 1,
            likes: Math.floor(Math.random() * 25),
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 2',
            id: 2,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 3',
            id: 3,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 4',
            id: 4,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 5',
            id: 5,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 6',
            id: 6,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 7',
            id: 7,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 8',
            id: 8,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 9',
            id: 9,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 10',
            id: 10,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 11',
            id: 11,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 12',
            id: 12,
            likes: Math.floor(Math.random() * 15)
        }
    ]

    // const [myPages, setMyPages] = useState(MyPages)

    // useEffect(() => {
    //     if(newPage) {
    //         setMyPages(prevState => {
    //             return[...prevState, newPage]
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
                            likes={myPage.likes}
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

