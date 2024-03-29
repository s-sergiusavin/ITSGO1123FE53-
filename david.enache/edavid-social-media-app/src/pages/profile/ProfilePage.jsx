import React from "react";
import { useParams, Link} from "react-router-dom";
import './ProfilePage.scss'
import imagineCoperta from '../../assets/images/imagineCoperta.jpg';
import imagineProfil from '../../assets/images/imagineProfil.jpg';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import imagineAndreeaCO from "./images/imagineAndreeaCO.jpg";
import imagineCosminCO from "./images/imagineCosminCO.jpg";
import imagineDavidCO from "./images/imagineDavidCO.jpg";
import imagineGeorgeCO from "./images/imagineGeorgeCO.jpg";
import imagineGeorgianaCO from "./images/imagineGeorgianaCO.jpg";
import imagineIulianCO from "./images/imagineIulianCO.jpg";

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

    return (
         <div className="profile-page-container">
             <div className="cover-photo">
                 <img src={imagineCoperta} alt="Imagine copertă" />
             </div>

             <div className="profile-photo">
                 <img src={imagineProfil} alt="Imagine profil" />
                 {/* <div className="cameral-icon">
                   <CameraAltIcon></CameraAltIcon>
                 </div> */}
             </div>

             <div className="profile-details">
                 <span className="name">Enache David</span>
                 <span className="friends">1k Prieteni</span>
             </div>

             <div className="Buttons">
                <Link to="/story">
             <Button variant="contained">+ Add to story</Button>
                </Link>
                <Link to="/Profile">
             <Button variant="outlined">Edit Profile</Button>
                </Link>
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