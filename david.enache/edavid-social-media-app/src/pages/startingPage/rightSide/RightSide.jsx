import React, { useState } from 'react';
// import styles from '../StartingPage.module.scss';
import  styles from './RightSide.module.scss';
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
  { name: "David", imageUrl: imagineDavid, timeJoined: "Active" ,width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Postu", imageUrl: imaginePostu, timeJoined: "5 minutes ago...",width: '30px', height: '30px', borderRadius: '50%' },
  { name: "Dinga", imageUrl: imagineDinga, timeJoined: "Active",width: '30px', height: '30px', borderRadius: '50%' },
  { name: "Hantaru", imageUrl:  imagineHantaru, timeJoined: "10 minutes ago...",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Flavius", imageUrl: imagineFlavius, timeJoined: "Active",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Mariana", imageUrl: imagineMariana, timeJoined: "1 hour ago...",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Cristian", imageUrl: imagineCristian, timeJoined: "Active",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Cosmin", imageUrl:  imagineCosmin, timeJoined: "24 minutes ago...",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Vlad", imageUrl: imagineVlad, timeJoined: "Active",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Andreea", imageUrl:  imagineAndreea, timeJoined: "40 minutes ago...",width: '30px', height: '30px', borderRadius: '50%'},
  { name: "Laurentiu", imageUrl: imagineLaurentiu, timeJoined: "Active",width: '30px', height: '30px', borderRadius: '50%' }
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
// style={{ marginTop: '7rem' }}
  return (
    <div className={styles.rightSide}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Friends</div>{}
        <input value={searchInput} type="text" className={styles.inputClass} onChange={searchInputFn} placeholder='Search...' />
        <ul className={styles.friendList}>
          {filteredFriends.map((friend, index) => (
            <li key={index} className={styles.liClass}>
              <div className={styles.friendContainer}>
                <img src={friend.imageUrl} alt={friend.name} className={styles.profileImage}
                  style={{ 
                    width: friend.width,
                    height: friend.height,
                    borderRadius: friend.borderRadius,
                  }}/>
                <FiberManualRecordIcon className={styles.statusIcon} style={{ color: index % 2 === 0 ? 'green' : 'red' }} />
                <span className={styles.friendName}>
                  {friend.name}
                </span>
                <span className={`${styles.joinTime} ${friend.timeJoined === "Active" ? styles.active : styles.inactive}`}>
  {friend.timeJoined === "Active" ? "Active" : `joined ${friend.timeJoined}`}
</span>


              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;