import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import styles from '../StartingPage.module.scss'

const LeftSide = () => {
    return (
        <div className={styles.leftSide}>
            <List className={styles.friendsList}>
                <ListItem className={styles.friend}>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Friend 1" />
                </ListItem>
            </List>
        </div>
    );
}

export default LeftSide;
