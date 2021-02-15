import React from 'react';
import styles from './Button.module.css'


const Button = (props) => {
    return (
        <button type='button' className={styles.button} onClick={props.toggleButton}>{props.isActive ? 'ON' : 'OFF'}</button>
    )
}

export default Button