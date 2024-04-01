import { useParams } from "react-router-dom";
import React from "react";
import styles from './MyProfile.module.scss';




// const ProfilePage = () => {

//     const id = useParams().id;
//     console.log(id)
//     return (
//         <div>Profile page {id}</div>
//     )
// }


// export default ProfilePage;
// import React from "react";
// import { useParams } from "react-router-dom";
// import './ProfilePage.scss';

const ProfilePage = () => {
    
    const id = useParams().id;
    console.log(id);

    // Informații despre utilizator (ar putea fi obținute dintr-o bază de date sau de la un API)
    const userInfo = {
        nume: "Macrescu",
        prenume: "Alex",
        dataNasterii: "04/01/2000",
        numarPostari: 20,
        numarShareuri: 125,
        numarLikeuri: 600,
        hobbyuri: ["fotbal", "tenis", "sah"],
        calatorii: ["Franța", "Spania", "Italia"]
    };

    return (
        <div className={styles.profileContainer}>
            <h2>Profilul lui {userInfo.prenume} {userInfo.nume}</h2>
            <div className={styles.profileInfo}>
                <p><strong>Nume:</strong> {userInfo.nume}</p>
                <p><strong>Prenume:</strong> {userInfo.prenume}</p>
                <p><strong>Data nașterii:</strong> {userInfo.dataNasterii}</p>
                <p><strong>Număr de postări:</strong> {userInfo.numarPostari}</p>
                <p><strong>Număr de share-uri:</strong> {userInfo.numarShareuri}</p>
                <p><strong>Număr de like-uri acumulate:</strong> {userInfo.numarLikeuri}</p>
                <p><strong>Hobby-uri:</strong> {userInfo.hobbyuri.join(", ")}</p>
                <p><strong>Țări vizitate:</strong> {userInfo.calatorii.join(", ")}</p>
            </div>
        </div>
    );
}

export default ProfilePage;
