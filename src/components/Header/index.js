import React from 'react'
import styles from './styles.css'

const Header = ({ children }) =>
    <div style={ styles.header }>
        { children }
    </div>


export default Header
