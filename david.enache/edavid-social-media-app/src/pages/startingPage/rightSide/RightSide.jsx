import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import styles from '../StartingPage.module.scss'

const RightSide = () => {
    return (
        <div className={styles.rightSide}>
            <List className={styles.messagesSection}>
                <ListItem className={styles.message}>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Message 1" />
                </ListItem>
            </List>
        </div>
    );
}

export default RightSide;
