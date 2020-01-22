import React from 'react'
import { AppContext } from './AppContext'
import Api from '../libs/Api'

export class AppContextProvider extends React.Component{

    state = {
        Api
    }

    render () {
        const { Api } = this.state
        return (
            <AppContext.Provider value={ this.state }>
                { this.props.children }
            </AppContext.Provider>
        )
    }
}
