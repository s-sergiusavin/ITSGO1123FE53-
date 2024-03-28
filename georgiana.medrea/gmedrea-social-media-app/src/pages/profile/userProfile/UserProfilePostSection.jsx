import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

import profile from '../../../assets/images/profile.jpg';
import post1 from '../../../assets/images/event1.jpeg';
import post2 from '../../../assets/images/event2.jpeg';
import userName1 from '../../../assets/images/userName1.jpg';
import userName2 from '../../../assets/images/userName2.jpg';
import userName3 from '../../../assets/images/userName3.jpg';
import userName4 from '../../../assets/images/userName4.jpeg';
import userName5 from '../../../assets/images/userName5.jpeg';
import userName6 from '../../../assets/images/userName6.jpg';
import userName7 from '../../../assets/images/userName7.jpg';
import userName8 from '../../../assets/images/userName8.jpg';
import userName9 from '../../../assets/images/userName9.jpg';
import userName10 from '../../../assets/images/userName10.jpg';
import userName11 from '../../../assets/images/userName11.jpg';
import userName12 from '../../../assets/images/userName12.jpg';

import { useState } from 'react';
import styles from "./UserProfile.module.scss"
import DropDownList from './UserProfileDropDownList';
import UserProfileCommentSection from './UserProfileCommentSection';

const UserProfilePostSection = ({ postData, id }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
    const [isShared, setIsShared] = useState(false)
    const [shares, setShares] = useState(Math.floor(Math.random() * 100))

    const postImages = {
        0: post1,
        1: post2
    }

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1)
        } else {
            setLikes(prevState => prevState - 1)
        }
        setIsLiked(prevState => !prevState)
    }

    const handleShare = () => {
        if (!isShared) {
            setShares(prevState => prevState + 1)
        } else {
            setShares(prevState => prevState - 1)
        }
        setIsShared(prevState => !prevState)
    }

    const [openDropDown, setOpenDropDown] = useState(false);

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible((isVisible) => !isVisible)
    }

    return (
        <>
            {isVisible && <div className={styles.mainPost}>
                <div className={styles.userInfo}>
                    <Link to='/me'>
                        <img src={profile} alt="Profile Picture"
                            className={styles.myProfilePictureImg} />
                    </Link>
                    <Link to='/me' className={styles.myProfileName}>Username</Link>

                    <div className={styles.contextMenu}>
                        <MoreHorizIcon onClick={() => setOpenDropDown((openDropDown) => !openDropDown)} />
                        {openDropDown && <DropDownList onButtonClick={handleClick}/>}
                    </div>
                </div>

                <section className={styles.content}>
                    <p>{postData.title}</p>
                    <div className={styles.imageWrapper}>
                        <img src={postImages[postData.id % 2]} alt="post content" className={styles.mainPostImage} />
                        <div className={styles.infoIcon}>
                            <InfoIcon fontSize='large' color='info' />
                        </div>
                    </div>

                    <p>{postData.body}</p>
                </section>

                <section className={styles.reacts}>
                    <div className={styles.likesNumber}>
                        <ThumbUpIcon />
                        <span className={styles.reactsCount}>{likes}</span>
                    </div>

                    <div className={styles.sharesNumber}>
                        <ReplyIcon />
                        <span className={styles.reactsCount}>{shares}</span>
                    </div>
                </section>

                <section className={styles.reactsActions}>
                    <div className={`${styles.reaction} ${isLiked && styles.blue}`} onClick={handleLike}>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className={styles.reaction}>
                        <CommentIcon />
                        <span>Comment</span>
                    </div>

                    <div className={`${styles.reaction} ${isShared && styles.blue}`} onClick={handleShare}>
                        <ReplyIcon />
                        <span>Share</span>
                    </div>
                </section>

                <section className={styles.commentContainer}>
                    <UserProfileCommentSection />
                </section>
            </div>}
        </>
    )
}

UserProfilePostSection.propTypes = {
    postData: PropTypes.object.isRequired
}


export default UserProfilePostSection;