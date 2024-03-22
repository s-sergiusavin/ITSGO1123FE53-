import styles from './LeftNavFriends.module.scss';
import userName1 from '../assets/images/userName1.jpg';
import userName2 from '../assets/images/userName2.jpg';
import userName3 from '../assets/images/userName3.jpg';
import userName4 from '../assets/images/userName4.jpeg';
import userName5 from '../assets/images/userName5.jpeg';
import userName6 from '../assets/images/userName6.jpg';
import userName7 from '../assets/images/userName7.jpg';
import userName8 from '../assets/images/userName8.jpg';
import userName9 from '../assets/images/userName9.jpg';
import userName10 from '../assets/images/userName10.jpg';
import userName11 from '../assets/images/userName11.jpg';
import userName12 from '../assets/images/userName12.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FriendListElement from './FriendListElement';

const LeftNavFriendsList = () => {

    const FriendsList = [
        {
            imageUrl: userName1,
            name: 'Username 1',
            id: 0
        },
        {
            imageUrl: userName2,
            name: 'Username 2',
            id: 1
        },
        {
            imageUrl: userName3,
            name: 'Username 3',
            id: 2
        },
        {
            imageUrl: userName4,
            name: 'Username 4',
            id: 3
        },
        {
            imageUrl: userName5,
            name: 'Username 5',
            id: 4
        },
        {
            imageUrl: userName6,
            name: 'Username 6',
            id: 5
        },
        {
            imageUrl: userName7,
            name: 'Username 7',
            id: 6
        },
        {
            imageUrl: userName8,
            name: 'Username 8',
            id: 7
        },
        {
            imageUrl: userName9,
            name: 'Username 9',
            id: 8
        },
        {
            imageUrl: userName10,
            name: 'Username 10',
            id: 9
        },
        {
            imageUrl: userName11,
            name: 'Username 11',
            id: 10
        },
        {
            imageUrl: userName12,
            name: 'Username 12',
            id: 11
        },
        {
            imageUrl: userName1,
            name: 'Username 13',
            id: 12
        },
        {
            imageUrl: userName2,
            name: 'Username 14',
            id: 13
        },
        {
            imageUrl: userName3,
            name: 'Username 15',
            id: 14
        },
        {
            imageUrl: userName4,
            name: 'Username 16',
            id: 15
        },
        {
            imageUrl: userName5,
            name: 'Username 17',
            id: 16
        },
        {
            imageUrl: userName6,
            name: 'Username 18',
            id: 17
        },
        {
            imageUrl: userName7,
            name: 'Username 19',
            id: 18
        },
        {
            imageUrl: userName8,
            name: 'Username 20',
            id: 19
        },
        {
            imageUrl: userName9,
            name: 'Username 21',
            id: 20
        },
        {
            imageUrl: userName10,
            name: 'Username 22',
            id: 21
        },
        {
            imageUrl: userName11,
            name: 'Username 23',
            id: 22
        },
        {
            imageUrl: userName12,
            name: 'Username 24',
            id: 23
        }
    ]

    return (
        <div className={styles.friendList}>
            <h3 className={styles.listTitle}>Friends list</h3>
            {FriendsList.map((friendListElement) => {
                return (
                    <FriendListElement
                        imageUrl={friendListElement.imageUrl}
                        name={friendListElement.name}
                        key={friendListElement.id}
                    />
                )
            })}
        </div>
        //     <div className={styles.requests}>
        //         <div className={styles.friendRequestsContainer}>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName1}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 17
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName9}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 18
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName4}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 19
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName12}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 20
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName1}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 21
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName7}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 22
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName9}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 24
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName10}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 23
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName1}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 16
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName12}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
        //                         Username 25
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //         </div>

        //         <div className={styles.suggestedFriendsContainer}>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName8}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 26
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName4}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 27
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName10}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 28
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName1}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 29
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName12}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 30
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName7}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 31
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName1}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 32
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName9}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 33
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName7}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 34
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //             <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
        //                 <CardMedia
        //                     component="img"
        //                     alt="user photo"
        //                     height="120"
        //                     image={userName10}
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
        //                         Username 35
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions className={styles.button}>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
        //                     <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
        //                 </CardActions>
        //             </Card>
        //         </div>
        //     </div>
        // </div >
    )
}

export default LeftNavFriendsList;