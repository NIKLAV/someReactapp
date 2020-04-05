import React from 'react'
import preloader from '../../../assets/img/41.gif'
import styles from './preloader.module.css'

const Preloader = (props) => {
    return <div className={styles.center}>
        <img  src={preloader}/>
    </div>
}

export default Preloader;