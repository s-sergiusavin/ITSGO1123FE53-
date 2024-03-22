import styles from './LeftNavPagesFollow.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pageName2 from '../ui/assets/images/pageName2.jpeg';
import pageName3 from '../ui/assets/images/pageName3.jpeg';
import pageName4 from '../ui/assets/images/pageName4.jpeg';
import pageName5 from '../ui/assets/images/pageName5.jpeg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const LeftNavPagesFollow = () => {
    return (
        <div className={styles.pages}>
            <div className={styles.suggestedPages}>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName5}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 1</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>165 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName4}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 2</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>1000 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName3}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 3</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>756 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName5}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 4</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>853 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName4}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 5</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>123 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.suggestedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName3}
                            alt="page name"
                        />
                        <CardContent className={styles.pageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pageName}>
                                <strong>Page name 6</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.pageLikes}>
                                <small>150 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}>
                            Like
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className={styles.likedPages}>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName2}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 10</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>18596 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName5}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 11</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>16555 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName3}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 12</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>16525 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName2}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 13</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>1650 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName5}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 14</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>1100 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }} className={styles.likedPage}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={pageName3}
                            alt="page name"
                        />
                        <CardContent className={styles.likedPageText}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.likedPageName}>
                                <strong>Page name 15</strong>
                            </Typography>
                            <Typography gutterBottom component="div" className={styles.likedPageLikes}>
                                <small>125 people like this page</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.likedButton}>
                            Liked
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default LeftNavPagesFollow;