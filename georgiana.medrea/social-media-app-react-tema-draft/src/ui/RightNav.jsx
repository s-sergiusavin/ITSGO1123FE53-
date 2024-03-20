import RightNavElement from './RightNavElement';
import styles from './RightNav.module.scss';
import userName1 from './assets/images/userName1.jpg';
import userName2 from './assets/images/userName2.jpg';
import userName3 from './assets/images/userName3.jpg';
import userName4 from './assets/images/userName4.jpeg';
import userName5 from './assets/images/userName5.jpeg';
import userName6 from './assets/images/userName6.jpg';
import userName7 from './assets/images/userName7.jpg';
import userName8 from './assets/images/userName8.jpg';
import userName9 from './assets/images/userName9.jpg';
import userName10 from './assets/images/userName10.jpg';
import userName11 from './assets/images/userName11.jpg';
import userName12 from './assets/images/userName12.jpg';


const RightNav = () => {

    const FriendsElements = [
        {
            imageUrl: userName1,
            name: 'Username 1',
            id: 0
        },
        {
            imageUrl: userName2,
            name: 'Username 2',
            id: 1
        },
        {
            imageUrl: userName3,
            name: 'Username 3',
            id: 2
        },
        {
            imageUrl: userName4,
            name: 'Username 4',
            id: 3
        },
        {
            imageUrl: userName5,
            name: 'Username 5',
            id: 4
        },
        {
            imageUrl: userName6,
            name: 'Username 6',
            id: 5
        },
        {
            imageUrl: userName7,
            name: 'Username 7',
            id: 6
        },
        {
            imageUrl: userName8,
            name: 'Username 8',
            id: 7
        },
        {
            imageUrl: userName9,
            name: 'Username 9',
            id: 8
        },
        {
            imageUrl: userName10,
            name: 'Username 10',
            id: 9
        },
        {
            imageUrl: userName11,
            name: 'Username 11',
            id: 10
        },
        {
            imageUrl: userName12,
            name: 'Username 12',
            id: 11
        }
    ]

    return (
        <div className={styles.rightContainer}>
            {FriendsElements.map( (friendElement) => {
                return (
                    <RightNavElement 
                    imageUrl={friendElement.imageUrl}
                    name={friendElement.name}
                    key={friendElement.id} />
                )
            })}
        </div>
    )
}

export default RightNav;