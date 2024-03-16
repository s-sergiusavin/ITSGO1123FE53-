import styles from './RightNav.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import userName1 from './assets/images/userName1.jpg';
import userName2 from './assets/images/userName2.jpg';
import userName3 from './assets/images/userName3.jpg';
import userName4 from './assets/images/userName4.jpeg';
import userName5 from './assets/images/userName5.jpeg';
import userName6 from './assets/images/userName6.jpg';
import userName7 from './assets/images/userName7.jpg';
import userName8 from './assets/images/userName8.jpg';
import userName9 from './assets/images/userName9.jpg';
import userName10 from './assets/images/userName10.jpg';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';


const RightNav = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.rightNav}>
            <ListItemText primary="Contacts" className={styles.title} />
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName1} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 1" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName2} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 2" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName3} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 3" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName4} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 4" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName5} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 5" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName6} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 6" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName7} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 7" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName8} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 8" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName9} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 9" className={styles.onlineUserName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Profile photo" src={userName10} sx={{ width: 75, height: 75 }} />
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Username 10" className={styles.onlineUserName} />
            </ListItem>
            <ListItemText primary="Group conversations" className={styles.title} />
            <ListItem>
                <ListItemAvatar>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <Diversity3Icon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Messenger Group 1" className={styles.onlineGroup} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
                            <Diversity3Icon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
                        </Avatar>
                    </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="Messenger Group 2" className={styles.onlineGroup} />
            </ListItem>

        </List>
    )
}

export default RightNav;