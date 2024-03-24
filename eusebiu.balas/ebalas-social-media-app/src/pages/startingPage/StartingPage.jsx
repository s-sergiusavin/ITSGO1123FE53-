import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss'
import Newsfeed from './newsfeed/Newsfeed';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className={styles.mainContainer}>
            <aside>Left side (folosim components leftside)</aside>
            <section className={styles.newsfeed}>
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
            </section>
            <aside>Right side content</aside>
        </div>
    )
}

export default StartingPage;