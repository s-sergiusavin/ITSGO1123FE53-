import styles from './Newsfeed.module.scss';

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';

import post1 from '../../../assets/images/post1.jpg';
import post2 from '../../../assets/images/post2.jpg';
import userName1 from '../../../assets/images/userName1.jpg';
import userName2 from '../../../assets/images/userName2.jpg';

import CommentsSection from './comments/CommentsSection';
import DropDownList from './NewsfeedDropDownList';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';

const Newsfeed = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
    const [isShared, setIsShared] = useState(false)
    const [shares, setShares] = useState(Math.floor(Math.random() * 100))

    const user = useSelector(selectUser)

    const postImages = {
        0: post1,
        1: post2,
    }

    const postUserName = {
        0: 'Username 1',
        1: 'Username 2',
    }

    const postProfileImage = {
        0: userName1,
        1: userName2,
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
                    <Link to={`/profile/${postData.id}`}>
                        <img src={postProfileImage[postData.id % 2]} alt="Profile Picture"
                            className={styles.profilePictureImg} />
                    </Link>
                    <Link to={`/profile/${postData.id}`}>{postUserName[postData.id % 2]}</Link>

                    <div className={styles.contextMenu}>
                        <MoreHorizIcon onClick={() => setOpenDropDown((openDropDown) => !openDropDown)}/>
                        {openDropDown && <DropDownList onButtonClick={handleClick} />}
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
                    <CommentsSection />
                </section>
            </div>}
        </>

    )
}

Newsfeed.propTypes = {
    postData: PropTypes.object.isRequired
}

export default Newsfeed;