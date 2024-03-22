import PropTypes from 'prop-types';
import styles from './LeftNav.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const LeftNavElement = ({ icon, name }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.leftNav}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue', width: 50, height: 50 }}>
                        {icon}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} className={styles.pageName} />
            </ListItem>
        </List >
    )
}

LeftNavElement.propTypes = {
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
}

export default LeftNavElement;