import { useState } from 'react';

import styles from './InterestsSection.module.scss'
import { Link } from 'react-router-dom';

// https://www.mockaroo.com/
const INTEREST_DATA = [
    {
        "id": 1,
        "tilu": "Programming in React",
        "interest": "Learn to program inreact,see the courses available at ITSchool",
        "link": "https://www.itschool.ro/cursuri/curs-web-development-online",
        "imagine": "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
    },
    {
        "id": 2,
        "tilu": "Holidays in the Mountains",
        "interest": "Discover the nature of Bucegi and Fagaras",
        "link": "https://christiantour.ro/sejur-oferte-vacante/sua/fagaras",
        "imagine": "https://www.experimenteaza.ro/23520-superlarge_default/vacanta-ca-n-povesti-in-casute-construite-la-poalale-muntilor-fagaras-pe-valea-porumbacului.jpg",
    },
    {
        "id": 2,
        "tilu": "Pottery classes",
        "interest": "Relaxed and create something special",
        "link": "https://arttime.ro/olarit/",
        "imagine": "https://www.experimenteaza.ro/8562-large_default_landscape/experimenteaza-conectarea-cu-lutul-atelier-de-olarit.jpg",
    }
]

const InterestsSection = () => {
    return (
        <div className={styles.commentsInputContainer}>
            <div className={styles.postComments}>
                {INTEREST_DATA && INTEREST_DATA.map((interest, idx) => {
                    return (
                        <div className={styles.comments} key={idx}>
                            <div className={styles.userInfo}>

                                <img src={interest.imagine} alt="Interest image" className={styles.profilePictureImg} />
                                <span>{interest.titlu}</span>

                            </div>
                            <div className={styles.commentInfo}>
                                <p>{interest.interest}</p>
                                <Link to={interest.link}>See more</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InterestsSection;