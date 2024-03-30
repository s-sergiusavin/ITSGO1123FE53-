import { useState } from 'react';
import profileImg from '../../../../assets/icons/profile.jpeg'

import styles from './FriendsSection.module.scss'
import { Link } from 'react-router-dom';

// https://www.mockaroo.com/
const USER_DATA = [
    {
        "id": 1,
        "firstName": "Eolanda",
        "lastName": "Rapp",
        "fullName": "Eolanda Rapp",
        "profileImage": "http://dummyimage.com/190x100.png/dddddd/000000"
    },
    { "id": 2, "firstName": "Rod", "lastName": "Line", "fullName": "Rod Line", "profileImage": "http://dummyimage.com/155x100.png/5fa2dd/ffffff" },
    { "id": 3, "firstName": "Caprice", "lastName": "MacCrosson", "fullName": "Caprice MacCrosson", "date": "4/19/2023", "profileImage": "http://dummyimage.com/142x100.png/5fa2dd/ffffff", "comment": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit" },
    { "id": 4, "firstName": "Dorris", "lastName": "Espina", "fullName": "Dorris Espina", "date": "4/22/2023", "profileImage": "http://dummyimage.com/147x100.png/dddddd/000000", "comment": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst" },
    { "id": 5, "firstName": "Gaspard", "lastName": "Ellin", "fullName": "Gaspard Ellin", "date": "10/7/2023", "profileImage": "http://dummyimage.com/154x100.png/cc0000/ffffff", "comment": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique" },
    { "id": 6, "firstName": "Coreen", "lastName": "Bucklan", "fullName": "Coreen Bucklan", "date": "6/9/2023", "profileImage": "http://dummyimage.com/135x100.png/cc0000/ffffff", "comment": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id" },
    { "id": 7, "firstName": "Amata", "lastName": "Lobe", "fullName": "Amata Lobe", "date": "2/9/2024", "profileImage": "http://dummyimage.com/171x100.png/ff4444/ffffff", "comment": "porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio" },
    { "id": 8, "firstName": "Coleen", "lastName": "Babbidge", "fullName": "Coleen Babbidge", "date": "3/4/2024", "profileImage": "http://dummyimage.com/243x100.png/cc0000/ffffff", "comment": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia" },
    { "id": 9, "firstName": "Dorine", "lastName": "Overthrow", "fullName": "Dorine Overthrow", "date": "6/23/2023", "profileImage": "http://dummyimage.com/223x100.png/cc0000/ffffff", "comment": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero" },
    { "id": 10, "firstName": "Pandora", "lastName": "Vowels", "fullName": "Pandora Vowels", "date": "6/25/2023", "profileImage": "http://dummyimage.com/102x100.png/5fa2dd/ffffff", "comment": "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in" }]

const FriendsSection = () => {

    return (
        <div className={styles.commentsInputContainer}>
            <div className={styles.postComments}>
                {USER_DATA && USER_DATA.map((friend, idx) => {
                    return (
                        <div className={styles.comments} key={idx}>
                            <div className={styles.userInfo}>
                                <Link to='/'>
                                    <img src={friend.profileImage} alt="Profile pic" className={styles.profilePictureImg} />
                                </Link>
                                <Link to='/'>
                                    <span>{friend.fullName}</span>
                                </Link>
                            </div>
                            <div className={styles.commentInfo}>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsSection;