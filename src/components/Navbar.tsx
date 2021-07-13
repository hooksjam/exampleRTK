/*import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MenuActions, UserActions } from 'Actions'
import { Button, Toggle, IconButton, Input, Dropdown, Prompt } from 'Components'
import { AppConstants, UserConstants } from 'Constants'
import { fnc } from 'Helpers'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleMenuSelect = this.handleMenuSelect.bind(this)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null
    }

    handleMenuSelect(item) {

    }

    render() {
        var menuItems = ["Test"]
        return (
            <div id="navbar">
                <Dropdown 
                    sidebar 
                    icon="fas fa-bars" 
                    noselect
                    items={menuItems} 
                    onSelect={this.handleMenuSelect}/>
            </div>
        )
    }
}

function mapState(state, ownProps) {
    const { user, menu } = state
    return { user, menu } 
}

const actionCreators = {
    prompt: MenuActions.prompt
}

const connectedNavbar = connect(mapState, actionCreators)(Navbar)
export { connectedNavbar as Navbar };*/