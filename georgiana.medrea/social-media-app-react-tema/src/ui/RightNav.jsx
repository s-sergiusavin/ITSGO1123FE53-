

import styles from './RightNav.module.scss';
import profileImage from './assets/images/profileImage.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import onlineUser1 from './assets/images/onlineUser1.jpg';
import onlineUser2 from './assets/images/onlineUser2.jpg';
import onlineUser3 from './assets/images/onlineUser3.jpg';


const RightNav = () => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.rightNav}>
            <ListItemText primary="Contacts" className={styles.title} />
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser1} />
                </ListItemAvatar>
                <ListItemText primary="Username 1" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser2} />
                </ListItemAvatar>
                <ListItemText primary="Username 2" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser1} />
                </ListItemAvatar>
                <ListItemText primary="Username 3" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser3} />
                </ListItemAvatar>
                <ListItemText primary="Username 4" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser2} />
                </ListItemAvatar>
                <ListItemText primary="Username 5" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser1} />
                </ListItemAvatar>
                <ListItemText primary="Username 6" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser2} />
                </ListItemAvatar>
                <ListItemText primary="Username 7" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser1} />
                </ListItemAvatar>
                <ListItemText primary="Username 8" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser2} />
                </ListItemAvatar>
                <ListItemText primary="Username 9" />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={onlineUser3} />
                </ListItemAvatar>
                <ListItemText primary="Username 10" />
            </ListItem>
            <ListItemText primary="Group conversations" className={styles.title} />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <Diversity3Icon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Messenger Group 1" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <Diversity3Icon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Messenger Group 2" />
            </ListItem>
            
        </List>
        )
    }
    


        // <div className={styles.rightNav}>
        //     <h4>Contacts</h4>
        //     <ul>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 1</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 2</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 3</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 4</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 5</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 6</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 7</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 8</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 9</strong></span>
        //         </li>
        //         <li>
        //             <img src={onlineUserImage} alt="Online user" width='65' />
        //             <span><strong>Username 10</strong></span>
        //         </li>
        //     </ul>

        //     <hr />

        //     <h4>Group conversations</h4>
        //     <ul>
        //         <li>
        //             <Diversity3Icon className={styles.icon} />
        //             <span><strong>Messenger Group 1</strong></span>
        //         </li>
        //         <li>
        //             <Diversity3Icon className={styles.icon} />
        //             <span><strong>Messenger Group 2</strong></span>
        //         </li>
        //     </ul>
        // </div>

export default RightNav;