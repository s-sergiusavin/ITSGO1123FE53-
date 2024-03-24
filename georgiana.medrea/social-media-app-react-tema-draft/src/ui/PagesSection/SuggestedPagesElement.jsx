import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './LeftNavPages.module.scss';
import { useState } from 'react';

const SuggestedPagesElement = ({ imageUrl, pageName, likes, updateThePages }) => {

    const [isVisible, setIsVisible] = useState(true);

    let initialValue = "Like"
    const [buttonText, setButtonText] = useState(initialValue)

    const [active, setActive] = useState(false);

    const pageHandler = () => {
        setButtonText("Liked");
        setActive(!active);
        setTimeout((setIsVisible), 2000)

        // const newPage = {
        //     imageUrl: imageUrl,
        //     pageName: pageName,
        //     id: Math.random() * 100,
        //     likes: likes
        // }

        // updateThePages(newPage)
    }

    return (
        <div>
            {isVisible && <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={imageUrl}
                        alt="page name"
                    />
                    <CardContent className={styles.suggestedPageText}>
                        <Typography gutterBottom variant="h6" component="div" className={styles.suggestedPageName}>
                            <strong>{pageName}</strong>
                        </Typography>
                        <Typography gutterBottom component="div" className={styles.suggestedPageLikes}>
                            <small>{likes} people like this page</small>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{ backgroundColor: active ? 'rgb(59, 112, 247)' : 'lightgray', color: active ? 'white' : 'black' }} className={styles.suggestedPageButton} onClick={pageHandler}>
                        {buttonText}
                    </Button>
                </CardActions>
            </Card>}
        </div>
    )
}

SuggestedPagesElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    updateThePages: PropTypes.func
}


export default SuggestedPagesElement;