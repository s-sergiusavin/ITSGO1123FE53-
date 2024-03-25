import React from 'react';
import styles from '../StartingPage.module.scss'
import './RightSide.scss'
import { useState } from 'react';

const RightSide = () => {

    const friends = ["David", "Postu", "Dinga", "Hantaru", 'Flavius'];  //sa mai pui prostule
 
    const [searchInput, setSearchInput] = useState("");

    let friendsList = [];
  
    friends.forEach((friends, index) => {
      friendsList.push(<li key={index}>{friends}</li>);
    }); 
 
     let result = [...friends];

     const searchInputFn = (e) => {
        console.log(e.target.value)
         e.preventDefault()
         setSearchInput(e.target.value)
        }
        if(searchInput.length > 2) {

          result = (friends.filter((friend) => {
            return friend.match(searchInput)
            
        }))
        }
    
    return (
        <div className={styles.rightSide}>
            <div className="card">
                <title >Friends</title>
                <input value={searchInput} type="text" onChange={searchInputFn} placeholder='Search...' />
                 
                <ul>
                    {result.map((friend, index) => {
                        return <li key={index} >{friend}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default RightSide;
