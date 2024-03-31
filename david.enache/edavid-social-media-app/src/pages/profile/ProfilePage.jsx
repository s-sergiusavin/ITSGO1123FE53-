import {React, useState} from "react";
import { useParams, Link} from "react-router-dom";
import './ProfilePage.scss';
import imagineCoperta from '../../assets/images/imagineCoperta.jpg';
import imagineProfil from '../../assets/images/imagineProfil.jpg';
import { Button, Drawer} from '@mui/material';
import imagineAndreeaCO from "./images/imagineAndreeaCO.jpg";
import imagineCosminCO from "./images/imagineCosminCO.jpg";
import imagineDavidCO from "./images/imagineDavidCO.jpg";
import imagineGeorgeCO from "./images/imagineGeorgeCO.jpg";
import imagineGeorgianaCO from "./images/imagineGeorgianaCO.jpg";
import imagineIulianCO from "./images/imagineIulianCO.jpg";
import imagineA from './images/imagineA.jpg'
import imagineB from './images/imagineB.jpg'
import imagineC from './images/imagineC.jpg'
import imagineD from './images/imagineD.jpg'
import imagineE from './images/imagineE.jpg'
import imagineF from './images/imagineF.jpg'


const ContainerDetails = () => {
    return (
        <div className="container-details">
            <h2>Detalii despre mine</h2>
            <p>Nume: Enache David</p>
            <p>Vârstă: 20 de ani</p>
            <p>Ocupație: Liber Profesionist</p>
            <p>Locație: Iasi Romania</p>
            <p>Pasiuni: Frond-End zona IT</p>
        </div>
    );
}
const FriendsSection = () => {
    const friends = [
        { id: 1, name: "Andreea", image: imagineAndreeaCO },
        { id: 2, name: "Iulian", image: imagineIulianCO },
        { id: 3, name: "George", image: imagineGeorgeCO },
        { id: 4, name: "David", image:  imagineDavidCO  },
        { id: 5, name: "Cosmin", image: imagineCosminCO },
        { id: 6, name: "Georgiana", image: imagineGeorgianaCO },
    ];

    return (
        <div className="friends-section">
            <h2>Friends</h2>
            <div className="friends-grid">
                {friends.map((friend) => (
                    <div className="friend" key={friend.id}>
                        <img src={friend.image} alt={friend.name} />
                        <p>{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

 const ProfilePage = () => {
    const {} = useParams();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const editProfileMenu = () => {
        return (
            <div className="edit-profile-menu">
                <ul>
                <li><Link to="/edit-profile" className="menu-item">Edit Profile</Link></li>
                <li><Link to="/Change-profile-image" className="menu-item">Change profile image</Link></li>
                <li><Link to="/Change-cover-photo" className="menu-item">Change cover photo</Link></li>
                <li><Link to="/change-password" className="menu-item">Change Password</Link></li>
                <li><Link to="/privacy-settings" className="menu-item">Privacy Settings</Link></li>
                </ul>
            </div>
        );
    };


        const [isStoryOpen, setIsStoryOpen] = useState(false);
        const toggleStory = () => {
            setIsStoryOpen(!isStoryOpen);
        };

    return (
         <div className="profile-page-container">
             <div className="cover-photo">
                 <img src={imagineCoperta} alt="Imagine copertă" />
             </div>

             <div className="profile-photo">
                 <img src={imagineProfil} alt="Imagine profil" />
             </div>

             <div className="profile-details">
                 <span className="name">Enache David</span>
                 <span className="friends">1k Prieteni</span>
             </div>

             <div className="Buttons">
             <Button variant="contained" onClick={toggleStory}>Add to Story</Button>
             <Drawer anchor="left" open={isStoryOpen} onClose={toggleStory}>
             <div className="story-images-drawer">
                    <div className="image-row">
                        <img src={imagineA} alt="Story 1" className="story-image" />
                        <img src={imagineB} alt="Story 2" className="story-image" />
                    </div>
                    <div className="image-row">
                        <img src={imagineC} alt="Story 3" className="story-image" />
                        <img src={imagineD} alt="Story 4" className="story-image" />
                    </div>
                    <div className="image-row">
                        <img src={imagineE} alt="Story 5" className="story-image" />
                        <img src={imagineF} alt="Story 6" className="story-image" />
                    </div>
                </div>
             </Drawer>

                <Button variant="outlined" onClick={toggleMenu}>Edit Profile</Button>
                <Drawer anchor={'left'} open={isMenuOpen} onClose={toggleMenu}>
                    {editProfileMenu()}
                </Drawer>
             </div>

             <div className="hr-line"></div>

             <div className="ButtonsDet">
                <Link to="/Posts">
        <Button variant="outlined" size="small">Posts</Button> 
                </Link>
                <Link to="/Photos">
        <Button variant="outlined" size="small">Photos</Button>
                </Link>
                <Link to="/Reels">
        <Button variant="outlined" size="small">Reels</Button>
        </Link>
              </div>
              <ContainerDetails></ContainerDetails>
              <FriendsSection></FriendsSection>
        </div>
     );
        }
            

export default ProfilePage;