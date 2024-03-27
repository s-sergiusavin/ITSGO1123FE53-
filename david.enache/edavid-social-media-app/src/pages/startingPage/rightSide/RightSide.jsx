import React, { useState } from 'react';
import styles from '../StartingPage.module.scss';
import './RightSide.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import imagineDavid from '../images/imagineDavid.jpg';
import imaginePostu from '../images/imaginePostu.jpg';
import imagineDinga from '../images/imagineDinga.jpg';
import imagineHantaru from '../images/imagineHantaru.jpg';
import imagineFlavius from '../images/imagineFlavius.jpg';
import imagineMariana from '../images/imagineMariana.jpg';
import imagineCristian from '../images/imagineCristian.jpg';
import imagineCosmin from '../images/imagineCosmin.jpg';
import imagineVlad from '../images/imagineVlad.jpg';
import imagineAndreea from '../images/imagineAndreea.jpg';
import imagineLaurentiu from '../images/imagineLaurentiu.jpg';


const friendsWithImages = [
  { name: "David", imageUrl: imagineDavid, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Postu", imageUrl: imaginePostu, width: '30px', height: '30px', borderRadius: '50%' },
  { name: "Dinga", imageUrl: imagineDinga, width: '30px', height: '30px', borderRadius: '50%' },
  { name: "Hantaru", imageUrl:  imagineHantaru, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Flavius", imageUrl: imagineFlavius, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Mariana", imageUrl: imagineMariana, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Cristian", imageUrl: imagineCristian, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Cosmin", imageUrl:  imagineCosmin, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Vlad", imageUrl: imagineVlad, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Andreea", imageUrl:  imagineAndreea, width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Laurentiu", imageUrl: imagineLaurentiu, width: '30px', height: '30px', borderRadius: '50%' }
];

const RightSide = () => {
  const [searchInput, setSearchInput] = useState("");
  

  const searchInputFn = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }; 


  const filteredFriends = friendsWithImages.filter(friend =>
    friend.name.toLowerCase().includes(searchInput.toLowerCase())
  );


  return (
    <div className={styles.rightSide}>
      <div className="card">
        <title>Friends</title>
        <input value={searchInput} type="text" onChange={searchInputFn} placeholder='Search...'  style={{ marginTop: '7rem' }}/>
       
       <ul>
          {filteredFriends.map((friend, index) => (
            <li key={index}>
              <img src={friend.imageUrl} alt={friend.name} className={styles.profileImage}
              style={{ 
                width: friend.width,
                height: friend.height,
                borderRadius: friend.borderRadius,
              }}/>
              <FiberManualRecordIcon className={styles.statusIcon} style={{ color: index % 2 === 0 ? 'green' : 'red' }} />
              <span>{friend.name}</span>
              <FiberManualRecordIcon className={styles.statusIcon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
