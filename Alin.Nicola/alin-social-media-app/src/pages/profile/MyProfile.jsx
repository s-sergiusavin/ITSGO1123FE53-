import React from 'react';

function MyProfile() {

    const user = {
        name: 'ALIN DAN NICOLA',
        email: 'nicolaalindan@yahoo.com',
        tel: '0743345456',
        adress: 'Rebæk Søpark 21,København',
        
    };
    return (
        <div>
            <h1>My Profile</h1>
            <h2>Web Developer</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Tel:</strong> {user.tel}</p>
            <p><strong>Adress:</strong> {user.adress}</p>
        </div>
    );
    
};



export default MyProfile;