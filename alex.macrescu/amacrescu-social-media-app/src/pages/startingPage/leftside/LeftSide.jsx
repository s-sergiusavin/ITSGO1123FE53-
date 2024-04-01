import  React  from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { People, Settings, AccountCircle, Photo, Videocam, MoreHoriz } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import '../StartingPage.module.scss'; // Asigură-te că ai definit aceste fișiere CSS
import './LeftSide.module.scss'; // De asemenea, asigură-te că ai definit și acest fișier CSS



const LeftSide = () => {
    return (
        <div>
            <List>
                <ListItem button component={Link} to="/friends">
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary="Prieteni" />
                </ListItem>
                <ListItem button component={Link} to="/settings">
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Setări" />
                </ListItem>
                <ListItem button component={Link} to="/profile">
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profil" />
                </ListItem>
                <ListItem button component={Link} to="/photos">
                    <ListItemIcon>
                        <Photo />
                    </ListItemIcon>
                    <ListItemText primary="Poze" />
                </ListItem>
                <ListItem button component={Link} to="/videos">
                    <ListItemIcon>
                        <Videocam />
                    </ListItemIcon>
                    <ListItemText primary="Videoclipuri" />
                </ListItem>
                <ListItem button component={Link} to="/more">
                    <ListItemIcon>
                        <MoreHoriz />
                    </ListItemIcon>
                    <ListItemText primary="Mai multe" />
                </ListItem>
            </List>
        </div>
    );
}

export default LeftSide;