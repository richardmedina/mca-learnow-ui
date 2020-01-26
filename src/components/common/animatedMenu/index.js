import React from 'react'
import styles from './styles.module.css'

const AnimatedMenu = ({ items }) =>
    <ul className={styles["animated-menu"]}>
        {
            items.map(item => 
                <li key={ item.text }>
                    <a href={item.href}>
                        {item.text}
                    </a>
                </li>
            )
        }
    </ul>

export default AnimatedMenu