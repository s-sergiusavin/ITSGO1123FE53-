import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss'
import Newsfeed from './newsfeed/Newsfeed';
import postService from '../../services/postService';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    const [postList, setPostList] = useState([])

    useEffect( () => {
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
            <aside className={styles.leftSide}>Left side (folosim components leftside)</aside>
            <section className={styles.newsfeed}>
                {postList && postList.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
            </section>
            <aside className={styles.rightSide}>Right side content</aside>
        </div>
    )
}

export default StartingPage;