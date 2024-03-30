import styles from './Pages.module.scss';

import { useState } from 'react';

import PropTypes from 'prop-types';

import SuggestedPages from './SuggestedPages';
import LikedPages from './LikedPages';

const Pages = () => {

    return (
        <div className={styles.pages}>
            <SuggestedPages />
            <LikedPages />
        </div>
    )
}

export default Pages;