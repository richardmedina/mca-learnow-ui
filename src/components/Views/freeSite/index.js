import React from 'react'
import Logo from '../../common/logo'
import AnimatedMenu from '../../common/animatedMenu'
import styles from './styles.module.css'

const items = [
    {
        text: "Find a Partner",
        href: "#"
    },
    {
        text: "Ask a Question",
        href: "#"
    },
    {
        text: "Speaking Room",
        href: "#"
    },
]

class FreeSite extends React.Component {
    render(){
        return (
            <div className={ styles.main }>
                <div className={ styles["main-bar"] }>
                    <div className={ styles["left-bar"] }>
                        <AnimatedMenu items={ items }></AnimatedMenu>
                    </div>
                    <div className={ styles["right-bar"] }>
                        <input type="text" placeholder="Find a partner" />
                        <a href="">
                            <Logo />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FreeSite