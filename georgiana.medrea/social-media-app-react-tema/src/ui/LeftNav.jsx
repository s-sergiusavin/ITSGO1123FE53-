
import PropTypes from 'prop-types';
import PeopleIcon from '@mui/icons-material/People';
import MmsIcon from '@mui/icons-material/Mms';
import GroupsIcon from '@mui/icons-material/Groups';
import styles from './LeftNav.module.scss';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import WebIcon from '@mui/icons-material/Web';
import EventIcon from '@mui/icons-material/Event';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InsightsIcon from '@mui/icons-material/Insights';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import profileImage from './assets/images/profileImage.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const LeftNav = () => {
    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.leftNav}>
            <ListItem>
                <ListItemAvatar >
                    <Avatar alt="Profile photo" src={profileImage} />
                </ListItemAvatar>
                <ListItemText primary="Georgiana Medrea" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <PeopleIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Friends" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <MmsIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Feeds" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <GroupsIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Groups" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <YouTubeIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Video" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <AccessTimeIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Memories" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <BookmarkBorderIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Saved" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <WebIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Pages" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <EventIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Events" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <WaterDropIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Blood donations" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <StorefrontIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Marketplace" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <InsightsIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Recent ad activity" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                        <FavoriteBorderIcon sx={{ bgcolor: 'blue' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Fundraisers" />
            </ListItem>
        </List>
    )
}

export default LeftNav;