// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { MenuActions, UserActions } from 'Actions'
// import { UserServices } from 'Services'

// import { Stream, Tile, PreviewTile, Mosaic, Button, Toggle, IconButton, OptionsMenu, Input } from 'Components'
// import { previewIterator } from 'Helpers'
// import { AppConstants, UserConstants } from 'Constants'

// var initialState = {
//     dismissing:false,
//     inputValue:'',
//     confirmed:false,

// }

// class Prompt extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = initialState

//         this.dismiss = this.dismiss.bind(this)
//         this.confirm = this.confirm.bind(this)
//         this.cancel = this.cancel.bind(this)
//         this.handleInputChange = this.handleInputChange.bind(this)
//         // this.handleInputKeyDown = this.handleInputKeyDown.bind(this)
//         this.inputRef = React.createRef()
//         this.dismissTimeout = null
//         this.reset = this.reset.bind(this)
//         this.prevDef = null
//         this.onKeyDown = this.onKeyDown.bind(this)
//         this.checkInputFocus = this.checkInputFocus.bind(this)
//     } 

//     componentDidMount() {
//         setTimeout(() => {window.addEventListener('click', this.dismiss)}, 100)
//         window.addEventListener('keydown', this.onKeyDown)
//         this.checkInputFocus()
//     }

//     componentWillUnmount() {
//         window.removeEventListener('click', this.dismiss)
//         window.removeEventListener('keydown', this.onKeyDown)
//     }

//     onKeyDown(e) {
//         if(e.key == 'Enter')
//             this.confirm()
//     }

//     reset() {
//         clearTimeout(this.dismissTimeout)
//         this.setState(initialState)
//     }

//     checkInputFocus() {
//         if(this.props.def.input && this.inputRef.current) {
//             setTimeout(() => {
//                 this.inputRef.current.focus()
//             }, 100)
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.def != this.props.def) {
//             this.prevDef = prevProps.def
//             this.reset()
//             this.checkInputFocus()
//             this.setState({confirmed:false})
//         }
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         return null
//     }

//     dismiss() {
//         if(this.props.def.goBackTo) {
//             this.props.prompt(this.props.def.goBackTo)
//         } else if(this.props.def.goBack && this.prevDef) {
//             this.props.prompt(this.prevDef)
//         } else {
//             this.setState({dismissing:true})
//             this.dismissTimeout = setTimeout(() => {
//                 this.setState({dismissing:false})
//                 /*if(this.props.def.goBackTo) {
//                     this.props.prompt(this.props.def.goBackTo)
//                 } else if(this.props.def.goBack && this.prevDef) {
//                     this.props.prompt(this.prevDef)
//                 } else {
//                     this.props.closePrompt()
//                 }*/
//                 this.props.closePrompt()
//             }, AppConstants.animTime)
//         }
//     }

//     async confirm() {
//         if(this.state.confirmed)
//             return
//         this.setState({confirmed:true})
//         var ret = true
//         if(this.props.def.confirm && typeof this.props.def.confirm == 'function') 
//             ret = await this.props.def.confirm(this.props.def.input && this.state.inputValue)
//         if(ret)
//             this.dismiss()
//     }

//     cancel() {
//         if(this.props.def.cancel && typeof this.props.def.cancel == 'function')
//             this.props.def.cancel()
//         this.dismiss()
//     }

//     handleInputChange(e) {
//         this.setState({inputValue:e.target.value})
//     }

//     /*handleInputKeyDown(e)  {
//         if(e.key == 'Enter') {
//             console.log("ENTER CONFIRM")
//             this.confirm()
//         }
//     }*/

//     render() {
//         if(!this.props.user.initialized || !this.props.def)
//             return null

//         var menuStyle = {}
//         var def = this.props.def

//         var dialogClass = 'dialog'
//         var dialogStyle = {}
//         if(this.state.dismissing) {
//             dialogStyle = {opacity:0}
//             dialogClass += ' promptOut'
//         } else {
//             dialogClass += ' promptIn'
//         }

//         var confirmMessage = def.confirmMessage || 'Confirm'
//         if(def.error)
//             confirmMessage = 'OK'

//         return (
//             <div className="prompt" style={menuStyle}>
//                 <div className={dialogClass} style={dialogStyle} onClick={(e) => {e.stopPropagation()}}>
//                     {def.title && <div className="title"><h1 className="noselect">{def.title}</h1><hr></hr></div>}
//                     {def.message && <div className="message"><span className="noselect">{def.message}</span><hr></hr></div>}
//                     {def.error && <div className="error"><span className="noselect">{def.error}</span><hr></hr></div>}
//                     {def.input && <div className="input"><input onKeyDown={null/*this.handleInputKeyDown*/} ref={this.inputRef} placeholder={def.placeholder} value={this.state.inputValue} onChange={this.handleInputChange}/><hr></hr></div>}
//                     {def.body && <div className="body">{def.body}<hr></hr></div>}
//                     {(def.confirm || def.cancel ) && 
//                         <div className="buttons">
//                             {def.cancel && <Button className="cancel" onClick={this.cancel}>{def.cancelMessage?def.cancelMessage:'Cancel'}</Button>}
//                             {def.confirm && <Button className="confirm" onClick={this.confirm}>{confirmMessage}</Button>}
//                         </div>}
//                 </div>
//             </div>
//         )
//     }
// }

// function mapState(state, ownProps) {
//     const { user, stream } = state
//     return { user, def:state.menu.prompt }
// }

// const actionCreators = {
//     closePrompt:MenuActions.promptDismiss,
//     prompt: MenuActions.prompt,
// }

// const connectedPrompt = connect(mapState, actionCreators)(Prompt)
// export { connectedPrompt as Prompt };