// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { MenuActions, UserActions, SongActions } from 'Actions'
// import { Button, Toggle, IconButton, Input } from 'Components'
// import { AppConstants, UserConstants } from 'Constants'
// import { fnc } from 'Helpers'


// class SettingsMenu extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {}
//         this.handlePref = this.handlePref.bind(this)
//     } 

//     componentDidMount() {
//     }

//     componentWillUnmount() {
//     }


//     static getDerivedStateFromProps(nextProps, prevState) {
//         return null
//     }

//     handlePref(pref, value) {
//         this.props.setPref(pref, value)
//     }

//     render() {
//         var modeOptions = Object.keys(AppConstants.displayMode).map(x => {return {text:fnc.capitalizeFirstLetter(AppConstants.displayMode[x]), value:AppConstants.displayMode[x]}})
//         return (
//             <div id="settings-menu" className="menu" onClick={this.props.closeMenu}>
//             	<IconButton className="close" icon="fas fa-times" onClick={this.props.closeMenu}/>

//             	<h1> Settings </h1>
//                 <div className="settings">
//                 </div>
//             </div>
//         )
//     }
// }

// function mapState(state, ownProps) {
//     const { user, menu, song } = state
//     return { user, menu, song } 
// }

// const actionCreators = {
//     openMenu: MenuActions.openMenu,
// 	closeMenu: MenuActions.closeMenu,
// }

// const connectedSettingsMenu = connect(mapState, actionCreators)(SettingsMenu)
// export { connectedSettingsMenu as SettingsMenu };