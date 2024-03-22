import styles from './LeftNavFriends.module.scss';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FriendRequestElement = ({ imageUrl, name }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                <CardMedia
                    component="img"
                    alt="user photo"
                    height="120"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                        {name}
                    </Typography>
                </CardContent>
                <CardActions className={styles.button}>
                    <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                    <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

FriendRequestElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default FriendRequestElement;