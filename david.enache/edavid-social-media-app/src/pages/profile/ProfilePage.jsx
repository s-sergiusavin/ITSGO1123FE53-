import React from "react";
import { useParams } from "react-router-dom";
import './ProfilePage.scss'
import imagineCoperta from '../../assets/images/imagineCoperta.jpg';
import imagineProfil from '../../assets/images/imagineProfil.jpg';



 const ProfilePage = () => {
    const {} = useParams();

    return (
         <>
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
             <nav className="about">
                 {/* Structura anterioară a meniului */}
             </nav>
        </div>
         <ProfilePage></ProfilePage>
      </>
     );
 }

export default ProfilePage;