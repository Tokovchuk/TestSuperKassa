import React from 'react';
import styles from './Button.module.css'


const Button = (props) => {
    return (
        <button type='button' className={styles.button} onClick={props.onButtonClick}>{props.isActive ? 'ON' : 'OFF'}</button>
    )
}

export default Button