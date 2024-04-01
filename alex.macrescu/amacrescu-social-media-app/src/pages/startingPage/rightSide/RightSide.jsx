import React from "react";
import styles from '../StartingPage.module.scss';
import './RightSide.scss';
import { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Adb, Apple } from "@mui/icons-material"; // Importăm iconițele Adb și Apple

// const RightSide = () => {
//     const [searchText, setSearchText] = useState(""); // Starea pentru textul introdus în câmpul de căutare

//     // Lista de persoane disponibile pentru căutare
//     const peopleList = ["Andrei", "Ioana", "Seba", "Ionut", "Daniela", "Marc", "Denis"];

//     // Funcția care se activează la modificarea câmpului de căutare
//     const handleSearchChange = (event) => {
//         setSearchText(event.target.value); // Actualizarea stării cu textul introdus
//     };

//     // Funcția care filtrează lista de persoane în funcție de textul introdus pentru căutare
//     const filteredPeopleList = peopleList.filter(person =>
//         person.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <div>
//             <TextField
//                 label="Caută după nume"
//                 variant="outlined"
//                 value={searchText}
//                 onChange={handleSearchChange}
//                 fullWidth
//                 margin="normal"
//             />
//             <List>
//                 {searchText.length > 0 ? (
//                     filteredPeopleList.map((person, index) => (
//                         <ListItem key={index}>
//                             <ListItemText primary={person} />
//                         </ListItem>
//                     ))
//                 ) : (
//                     peopleList.map((person, index) => (
//                         <ListItem key={index}>
//                             <ListItemText primary={person} />
//                         </ListItem>
//                     ))
//                 )}
//             </List>
//         </div>
//     );
// };

// export default RightSide;


const RightSide = () => {
    const [searchText, setSearchText] = useState(""); // Starea pentru textul introdus în câmpul de căutare

    // Lista de persoane disponibile pentru căutare, împreună cu iconițele aferente
    const peopleList = [
        { name: "Andrei", icon: <Adb /> },
        { name: "Ioana", icon: <Apple /> },
        { name: "Seba", icon: <Adb /> },
        { name: "Ionut", icon: <Apple /> },
        { name: "Daniela", icon: <Adb /> },
        { name: "Marc", icon: <Apple /> },
        { name: "Denis", icon: <Adb /> },
    ];

    // Funcția care se activează la modificarea câmpului de căutare
    const handleSearchChange = (event) => {
        setSearchText(event.target.value); // Actualizarea stării cu textul introdus
    };

    // Funcția care filtrează lista de persoane în funcție de textul introdus pentru căutare
    const filteredPeopleList = peopleList.filter(person =>
        person.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <TextField
                label="Caută după nume"
                variant="outlined"
                value={searchText}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            <List>
                {searchText.length > 0 ? (
                    filteredPeopleList.map((person, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {person.icon}
                            </ListItemIcon>
                            <ListItemText primary={person.name} />
                        </ListItem>
                    ))
                ) : (
                    peopleList.map((person, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                {person.icon}
                            </ListItemIcon>
                            <ListItemText primary={person.name} />
                        </ListItem>
                    ))
                )}
            </List>
        </div>
    );
};

export default RightSide;