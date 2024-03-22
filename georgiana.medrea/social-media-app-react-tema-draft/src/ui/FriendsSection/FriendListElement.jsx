import styles from './LeftNavFriends.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';


const FriendListElement = ({ imageUrl, name }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={imageUrl} sx={{ width: 65, height: 65 }} />
                </ListItemAvatar>
                <ListItemText primary={name} className={styles.friendName} />
            </ListItem>
        </List>
    )
}

FriendListElement.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default FriendListElement;