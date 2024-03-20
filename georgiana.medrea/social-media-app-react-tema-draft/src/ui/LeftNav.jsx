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
import LeftNavElement from './LeftNavElement';

const LeftNav = () => {

    const IconElements = [
        {
            icon: <PeopleIcon/>,
            name: 'Friends',
            id: 0
        },
        {
            icon: <MmsIcon/>,
            name: 'Feeds',
            id: 1
        },
        {
            icon: <GroupsIcon/>,
            name: 'Groups',
            id: 2
        },
        {
            icon: <YouTubeIcon/>,
            name: 'Video',
            id: 3
        },
        {
            icon: <AccessTimeIcon/>,
            name: 'Memories',
            id: 4
        },
        {
            icon: <BookmarkBorderIcon/>,
            name: 'Saved',
            id: 5
        },
        {
            icon: <WebIcon/>,
            name: 'Pages',
            id: 6
        },
        {
            icon: <EventIcon/>,
            name: 'Events',
            id: 7
        },
        {
            icon: <WaterDropIcon/>,
            name: 'Blood donations',
            id: 8
        },
        {
            icon: <StorefrontIcon/>,
            name: 'Marketplace',
            id: 9
        },
        {
            icon: <InsightsIcon/>,
            name: 'Recent ad activity',
            id: 10
        },
        {
            icon: <FavoriteBorderIcon/>,
            name: 'Fundraisers',
            id: 11
        },

    ]


    return (
        <div>
            <LeftNavElement icon={IconElements[0].icon} name={IconElements[0].name}/>
            <LeftNavElement icon={IconElements[1].icon} name={IconElements[1].name}/>
            <LeftNavElement icon={IconElements[2].icon} name={IconElements[2].name}/>
            <LeftNavElement icon={IconElements[3].icon} name={IconElements[3].name}/>
            <LeftNavElement icon={IconElements[4].icon} name={IconElements[4].name}/>
            <LeftNavElement icon={IconElements[5].icon} name={IconElements[5].name}/>
            <LeftNavElement icon={IconElements[6].icon} name={IconElements[6].name}/>
            <LeftNavElement icon={IconElements[7].icon} name={IconElements[7].name}/>
            <LeftNavElement icon={IconElements[8].icon} name={IconElements[8].name}/>
            <LeftNavElement icon={IconElements[9].icon} name={IconElements[9].name}/>
            <LeftNavElement icon={IconElements[10].icon} name={IconElements[10].name}/>
            <LeftNavElement icon={IconElements[11].icon} name={IconElements[11].name}/>
        </div>

        // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.leftNav}>
        //     <ListItem>
        //         <ListItemAvatar >
        //             <Avatar alt="Profile photo" src={profileImage} sx={{ width: 75, height: 75 }} />
        //         </ListItemAvatar>
        //         <ListItemText primary="Georgiana Medrea" className={styles.userName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <PeopleIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Friends" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <MmsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Feeds" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <GroupsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Groups" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <YouTubeIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Video" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <AccessTimeIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Memories" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <BookmarkBorderIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Saved" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <WebIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Pages" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <EventIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Events" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <StorefrontIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Marketplace" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <InsightsIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Recent ad activity" className={styles.pageName} />
        //     </ListItem>
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar sx={{ bgcolor: 'blue', width: 55, height: 55 }}>
        //                 <FavoriteBorderIcon sx={{ bgcolor: 'blue', width: 35, height: 35 }} />
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText primary="Fundraisers" className={styles.pageName} />
        //     </ListItem>
        // </List >
    )
}

export default LeftNav;