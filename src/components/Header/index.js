import React from 'react'
import styles from './styles.css'

const Header = ({ children }) =>
    <div style={ styles.header }>
        <div className={ "hello world"}>
            { children }
        </div>
    </div>


export default Header
