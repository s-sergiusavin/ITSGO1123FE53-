import styles from './LeftNavFriends.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import userName1 from '../ui/assets/images/userName1.jpg';
import userName2 from '../ui/assets/images/userName2.jpg';
import userName3 from '../ui/assets/images/userName3.jpg';
import userName4 from '../ui/assets/images/userName4.jpeg';
import userName5 from '../ui/assets/images/userName5.jpeg';
import userName6 from '../ui/assets/images/userName6.jpg';
import userName7 from '../ui/assets/images/userName7.jpg';
import userName8 from '../ui/assets/images/userName8.jpg';
import userName9 from '../ui/assets/images/userName9.jpg';
import userName10 from '../ui/assets/images/userName10.jpg';
import userName11 from '../ui/assets/images/userName11.jpg';
import userName12 from '../ui/assets/images/userName12.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const LeftNavFriends = () => {

    return (
        <div className={styles.friends}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={styles.leftNavFriends}>
                <ListItemText primary="Friends list" className={styles.listTitle} />
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName1} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 1" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName2} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 2" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName3} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 3" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName4} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 4" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName5} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 5" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName6} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 6" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName7} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 7" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName8} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 8" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName9} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 9" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName10} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 10" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName11} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 11" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName12} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 12" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName1} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 13" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName2} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 14" className={styles.friendName} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar alt="Profile photo" src={userName3} sx={{ width: 75, height: 75 }} />
                    </ListItemAvatar>
                    <ListItemText primary="Username 15" className={styles.friendName} />
                </ListItem>
            </List>

            <div className={styles.requests}>
                <div className={styles.friendRequestsContainer}>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 17
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName9}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 18
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 19
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName12}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 20
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 21
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName7}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 22
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName9}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 24
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName10}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 23
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 16
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.friendRequest}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName12}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.friendName}>
                                Username 25
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.confirmButton}>Confirm</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                </div>

                <div className={styles.suggestedFriendsContainer}>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName8}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 26
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 27
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName10}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 28
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 29
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName12}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 30
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName7}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 31
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 32
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName9}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 33
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName7}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 34
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 180, maxHeight: 250 }} className={styles.suggestedFriend}>
                        <CardMedia
                            component="img"
                            alt="user photo"
                            height="120"
                            image={userName10}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className={styles.suggestedFriendName}>
                                Username 35
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.button}>
                            <Button size="small" sx={{ border: 1 }} className={styles.addFriendButton}>Add friend</Button>
                            <Button size="small" sx={{ border: 1 }} className={styles.removeButton}>Remove</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default LeftNavFriends;