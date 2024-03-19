import styles from './LeftNavEvent.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import event1 from '../ui/assets/images/event1.jpeg';
import event2 from '../ui/assets/images/event2.jpeg';
import event3 from '../ui/assets/images/event3.jpeg';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LeftNavEvent = () => {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '15ch' }
                }}
                noValidate
                autoComplete="off"
                className={styles.titleSuggested}
            >
                <TextField id="standard-basic" label="Discover events" variant="standard" />
            </Box>

            <div className={styles.events}>
                <div className={styles.suggestedEvents}>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event1}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    17 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event2}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    70 interested · 50 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event3}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    10 interested · 10 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event1}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 4
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    1710 interested · 300 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event2}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 5
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    17 interested · 1 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.suggestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event3}
                                alt="event"
                            />
                            <CardContent className={styles.suggestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.suggestedEventName}>
                                    Event name 6
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.suggestedEventIntestedPeople}>
                                    170 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.actionButtons}>
                            <Button size="small" color="primary" className={styles.button}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendIcon} />
                        </CardActions>
                    </Card>
                </div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '11ch' }
                    }}
                    noValidate
                    autoComplete="off"
                    className={styles.titleInterested}
                >
                    <TextField id="standard-basic" label="Your events" variant="standard" />
                </Box>
                <div className={styles.interestedEvents}>

                    <Card sx={{ maxWidth: 345 }} className={styles.interestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event1}
                                alt="event"
                            />
                            <CardContent className={styles.interestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.interestedEventName}>
                                    Event name 7
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.peopleAttending}>
                                    17 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.interestedActionButtons}>
                            <Button size="small" color="primary" className={styles.interestedButton}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendInterestedIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.interestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event2}
                                alt="event"
                            />
                            <CardContent className={styles.interestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.interestedEventName}>
                                    Event name 8
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.peopleAttending}>
                                    17 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.interestedActionButtons}>
                            <Button size="small" color="primary" className={styles.interestedButton}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendInterestedIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.interestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event3}
                                alt="event"
                            />
                            <CardContent className={styles.interestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.interestedEventName}>
                                    Event name 9
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.peopleAttending}>
                                    17 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.interestedActionButtons}>
                            <Button size="small" color="primary" className={styles.interestedButton}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendInterestedIcon} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className={styles.interestedEvent}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={event1}
                                alt="event"
                            />
                            <CardContent className={styles.interestedEventText}>
                                <Typography gutterBottom variant="h5" component="div" className={styles.interestedEventName}>
                                    Event name 10
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.peopleAttending}>
                                    17 interested · 30 going
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.interestedActionButtons}>
                            <Button size="small" color="primary" className={styles.interestedButton}>
                                Interested
                            </Button>
                            <SendIcon className={styles.sendInterestedIcon} />
                        </CardActions>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default LeftNavEvent;