import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss'
import Newsfeed from './newsfeed/Newsfeed';
import RightSide from './rightSide/RightSide';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className={styles.mainContainer}>
            <aside className={styles.leftSide}>Left side</aside>
            <section className={styles.newsfeed}>
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}/>
                })}
            </section>
            <RightSide className={styles.rightSide}/>
        </div>
    )
}

export default StartingPage;