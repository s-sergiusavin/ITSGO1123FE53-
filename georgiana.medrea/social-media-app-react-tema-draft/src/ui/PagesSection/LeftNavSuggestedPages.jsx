import { element } from 'prop-types';
import pageName2 from '../assets/images/pageName2.jpeg';
import pageName3 from '../assets/images/pageName3.jpeg';
import pageName4 from '../assets/images/pageName4.jpeg';
import SuggestedPagesElement from './SuggestedPagesElement';
import styles from './LeftNavPages.module.scss'


const LeftNavSuggestedPages = () => {

    const SuggestedPagesList = [
        {
            imageUrl: pageName2,
            pageName: 'Event name 20',
            id: 20,
            likes: Math.floor(Math.random() * 25),
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 21',
            id: 21,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 22',
            id: 22,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 23',
            id: 23,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 24',
            id: 24,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 25',
            id: 25,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 26',
            id: 26,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 27',
            id: 27,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName3,
            pageName: 'Event name 28',
            id: 28,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 29',
            id: 29,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName2,
            pageName: 'Event name 30',
            id: 30,
            likes: Math.floor(Math.random() * 15)
        },
        {
            imageUrl: pageName4,
            pageName: 'Event name 31',
            id: 31,
            likes: Math.floor(Math.random() * 15)
        }
    ]

    return (
        <>
            <h3 className={styles.titleSuggestedPages}>Suggested Pages</h3>
            <div className={styles.suggestedPages}>
                {SuggestedPagesList.map((suggestedPage) => {
                return (
                <SuggestedPagesElement
                    imageUrl={suggestedPage.imageUrl}
                    pageName={suggestedPage.pageName}
                    key={suggestedPage.id}
                    likes={suggestedPage.likes}
                />
                )
            })}
            </div>
        </>
    )
}

export default LeftNavSuggestedPages;