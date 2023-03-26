import React from 'react'
import SimpleBar from 'simplebar-react';
import NavComponent from '../../components/NavComponent/NavComponent';
import { CharactersPage } from '../CharactersPage';
import styles from './HomePage.module.css';


export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
     {/* <SimpleBar style={{ height: '300px' }}> */}
      {/* <CharactersPage></CharactersPage> */}
        {/* </SimpleBar> */}
    <h1 className={styles.center}>
      RICK AND MORTY
    </h1>

    </div>
  )
}
