
import React, {useState, useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss';
import Newsfeed from './newsfeed/Newsfeed';
import LeftSide from './leftside/LeftSide';
import RightSide from './rightSide/RightSide';
import postService from '../../services/postService'


const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    const [postList, setPostList] = useState([])

    useEffect( () => {
        async function getPosts() {
            const response = await postService.get()
            setPostList(response)
            return response;
        }
    }, [])

    return (
        <div className={styles.mainContainer}>
        <aside><LeftSide/></aside>
        <section className={styles.newsfeed}>
            {posts && posts.map(post => {
                return <Newsfeed postData={post} key={post.id}/>
            })}
        </section>
        <aside><RightSide/></aside>
    </div>
    )
}

export default StartingPage;