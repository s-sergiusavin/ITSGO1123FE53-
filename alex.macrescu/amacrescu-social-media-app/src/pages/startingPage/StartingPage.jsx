import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss'
import Newsfeed from './newsfeed/Newsfeed';
import postService from '../../services/postService';
import LeftSide from './leftside/LeftSide';
import RightSide from './rightSide/RightSide';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await postService.get()
            setPostList(response)
            return response;
        }
        getPosts().catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className={styles.mainContainer}>
            <aside> <LeftSide /></aside>
            <section className={styles.newsfeed}>
                {postList && postList.map(post => {
                    return <Newsfeed postData={post} key={post.id} />
                })}
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id} />
                })}
            </section>
            <aside><RightSide /> </aside>
        </div>
    )
}

export default StartingPage;