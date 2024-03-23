import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './LeftNavPages.module.scss'


const MyPageElement = ({ imageUrl, pageName, likes}) => {
    return (
        <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={imageUrl}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>{pageName}</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>{likes} people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedPageButton}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
    )
}

MyPageElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
}

export default MyPageElement;