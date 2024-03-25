import styles from "./MyProfile.module.scss";
import coverPhoto from '../ui/assets/images/cover.jpg';
import profileImage from '../ui/assets/images/profileImage.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import myPhoto1 from '../ui/assets/images/myPhoto1.jpeg';
import myPhoto2 from '../ui/assets/images/myPhoto2.jpeg';
import myPhoto3 from '../ui/assets/images/myPhoto3.jpeg';
import myPhoto4 from '../ui/assets/images/myPhoto4.jpeg';
import myPhoto5 from '../ui/assets/images/myPhoto5.jpeg';
import myPhoto6 from '../ui/assets/images/myPhoto6.jpeg';
import myPhoto7 from '../ui/assets/images/myPhoto7.jpeg';
import myPhoto8 from '../ui/assets/images/myPhoto8.jpeg';
import myPhoto9 from '../ui/assets/images/myPhoto9.jpeg';
import user1 from '../ui/assets/images/user1.jpg';
import user2 from '../ui/assets/images/user2.jpg';
import user3 from '../ui/assets/images/user3.jpg';
import user4 from '../ui/assets/images/user4.jpeg';
import user5 from '../ui/assets/images/user5.jpeg';
import user6 from '../ui/assets/images/user6.jpg';
import user7 from '../ui/assets/images/user7.jpg';
import user8 from '../ui/assets/images/user8.jpg';
import user9 from '../ui/assets/images/user9.jpg';
import user10 from '../ui/assets/images/user10.jpg';
import user11 from '../ui/assets/images/user11.jpg';
import user12 from '../ui/assets/images/user12.jpg';


const MyProfile = () => {

    // const itemData = [
    //     {
    //         img: myPhoto1,
    //         title: 'Breakfast',
    //         id: 0
    //     },
    //     {
    //         img: myPhoto2,
    //         title: 'Burger',
    //         id: 1
    //     },
    //     {
    //         img: myPhoto3,
    //         title: 'Camera',
    //         id: 2
    //     },
    //     {
    //         img: myPhoto4,
    //         title: 'Coffee',
    //         id: 3
    //     },
    //     {
    //         img: myPhoto5,
    //         title: 'Hats',
    //         id: 4
    //     },
    //     {
    //         img: myPhoto6,
    //         title: 'Honey',
    //         id: 5
    //     },
    //     {
    //         img: myPhoto7,
    //         title: 'Basketball',
    //         id: 6
    //     },
    //     {
    //         img: myPhoto8,
    //         title: 'Fern',
    //         id: 7
    //     },
    //     {
    //         img: myPhoto9,
    //         title: 'Mushrooms',
    //         id: 8
    //     }
    // ];

    const friendsData = [
        {
            img: user1,
            name: 'Username 1',
            id: 0
        },
        {
            img: user9,
            name: 'Username 2',
            id: 1
        },
        {
            img: user7,
            name: 'Username 3',
            id: 2
        },
        {
            img: user4,
            name: 'Username 4',
            id: 3
        },
        {
            img: user5,
            name: 'Username 5',
            id: 4
        },
        {
            img: user6,
            name: 'Username 6',
            id: 5
        },
        {
            img: user7,
            name: 'Username 7',
            id: 6
        },
        {
            img: user8,
            name: 'Username 8',
            id: 7
        },
        {
            img: user9,
            name: 'Username 9',
            id: 8
        },
        {
            img: user10,
            name: 'Username 10',
            id: 9
        },
        {
            img: user4,
            name: 'Username 11',
            id: 10
        },
        {
            img: user12,
            name: 'Username 12',
            id: 11
        },
        {
            img: user1,
            name: 'Username 13',
            id: 12
        },
        {
            img: user9,
            name: 'Username 14',
            id: 13
        },
        {
            img: user10,
            name: 'Username 15',
            id: 14
        },
        {
            img: user4,
            name: 'Username 16',
            id: 15
        },
        {
            img: user9,
            name: 'Username 17',
            id: 16
        },
        {
            img: user6,
            name: 'Username 18',
            id: 17
        },
        {
            img: user7,
            name: 'Username 19',
            id: 18
        },
        {
            img: user8,
            name: 'Username 20',
            id: 19
        },
        {
            img: user9,
            name: 'Username 21',
            id: 20
        },
        {
            img: user10,
            name: 'Username 22',
            id: 21
        },
        {
            img: user7,
            name: 'Username 23',
            id: 22
        },
        {
            img: user12,
            name: 'Username 24',
            id: 23
        }
    ]


    return (
        <div className={styles.myProfileContainer}>
            <header className={styles.myProfileHeader}>
                <img src={coverPhoto} alt="" className={styles.coverPhoto} />
                <ListItem className={styles.myProfileData}>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={profileImage} sx={{ width: 120, height: 120 }} className={styles.myProfilePhoto} />
                    </ListItemAvatar>
                    <ListItemText primary="Georgiana Medrea" className={styles.myProfileName} />
                </ListItem>
            </header>
            <div className={styles.myProfileSections}>
                <section className={styles.myProfileLeftSection}>
                    <div className={styles.intro}>Intro</div>
                    {/* <div className={styles.myPhotos}>
                        <ListItemText primary="Photos" className={styles.myProfilePhotosTitle} />
                        <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div> */}
                    <div className={styles.myFriends}>
                        <ListItemText primary="Friends" className={styles.myProfileFriendsTitle} />
                        <ImageList sx={{ width: 500, height: 500 }} cols={3}>
                            {friendsData.map((friend) => (
                                <ImageListItem key={friend.id}>
                                    <img
                                        srcSet={`${friend.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
                                        src={`${friend.img}?w=248&fit=crop&auto=format`}
                                        alt={friend.title}
                                        className={styles.friendPhoto} />
                                    <ImageListItemBar
                                        title={friend.name}
                                        position="below"
                                        className={styles.friendName} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </section>
                <section className={styles.myProfileRightSection}></section>
            </div>

        </div>
    )
}

export default MyProfile;