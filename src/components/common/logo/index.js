import React from 'react'
import logo from '../../../assets/images/mycleverapp.png';
import styles from './styles.module.css'

export default class Logo extends React.Component {
    getCssClassBySize = size =>
    {
        console.log("SIZE: ", size);
        if (!size) size = "small"

        switch (size.toUpperCase())
        {
            case "SMALL":
                return styles["logo-small"]
            case "NORMAL":
                return styles["logo-normal"]
            case "BIG":
                return styles["logo-big"]
            case "HUGE":
                return styles["logo-huge"]
            default:
                return styles["logo-small"]
        }
    }
    render() {
        const { size } = this.props

        return (
            <div className={ styles.container }>
                <img alt="Logo" src={ logo } className={ this.getCssClassBySize(size) } />
                <div className={ styles["app-name"] }>
                    <span className={ styles["app-name-span"]}>
                        My Clever App
                    </span>
                </div>
            </div>
        )
    }
}