// import React from "react"
// import { connect } from 'react-redux'
// import { Button, IconButton } from 'Components'

// export class Dropdown extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showMenu: false,
//             onSelect: this.props.onSelect || ((x) => {console.log(`Select ${x}`)}),
//             selected: this.props.selected != null ? this.props.selected : '',
//             closeOnSelect: this.props.closeOnSelect || true
//         }
//         this.state.lastSelected = this.state.selected

//         this.showMenu = this.showMenu.bind(this)
//         this.closeMenu = this.closeMenu.bind(this)
//         this.selectItem = this.selectItem.bind(this)
//         this.setSelected = this.setSelected.bind(this)
//     }

//     componentDidUpdate() {
        
//     }
  
//     static getDerivedStateFromProps(nextProps, prevState ) {
//         var nextSelect = nextProps.selected != null ? nextProps.selected: ''
//         if(nextSelect != prevState.lastSelected) {
//             return {
//                 selected:nextSelect,
//                 lastSelected:nextSelect
//             }
//         }
//         return null
//     }

//     showMenu(event) {
//         event.preventDefault()

//         this.setState({showMenu: true}, () => {
//             document.addEventListener('click', this.closeMenu)
//         })
//     }

//     closeMenu(event, force = false) {
//         if(event) {
//             event.preventDefault()
//             event.stopPropagation()
//         }
//         if(force || (this.dropdownMenu && !this.dropdownMenu.contains(event.target))) {
//             this.setState({showMenu: false}, () => {
//                 document.removeEventListener('click', this.closeMenu)
//             })
//         }
//     }

//     setSelected(value) {
//         this.setState({selected:value})
//     }

//     selectItem(value, text) {
//         if(!this.props.noselect && (typeof value === 'string' || value != null)) {
//             this.setSelected(value)
//         }

//         this.props.onSelect(value)
//         if(this.state.closeOnSelect) {
//             this.closeMenu(null, true)
//         }
//     }

//     render() {
//         const {
//             className,
//             sidebar,
//             dropdownClass,
//             buttonClass,
//             upwards,
//             title,
//             label,
//             items,
//             style,
//             icon,
//             center,
//             middle,
//             limitHeight,
//             ...others
//         } = this.props

//         var renderItems = []
//         if(this.state.showMenu && items) {
//             renderItems = items.map(x => {
//                 if(x.icon != null) {
//                     var value = x.value != null ? x.value : x
//                     var icon = x.icon
//                     var className = x.class || ''
//                     return (<IconButton 
//                         icon={icon} 
//                         className={`${(this.state.selected == value)?'dropdown-selected':''} ${className}`} 
//                         key={value} 
//                         onClick={()=>{this.selectItem(value, text)}}/>)
//                 } else {
//                     var value = x.value != null ? x.value : x
//                     var text = x.text != null ? x.text : x
//                     var className = x.class || ''
//                     return (<div className={`dropdown-item ${(this.state.selected == value)?'dropdown-selected':''} ${className}`} 
//                         key={value} 
//                         onClick={()=>{this.selectItem(value, text)}}><label>{text}</label> </div>)
//                 }
//             })
//         }
//         var selectedText = this.props.items.find(x => {
//             return (x.value!=null?x.value:x) == this.state.selected
//         })
//         if(selectedText && selectedText.text) 
//             selectedText = selectedText.text

//         var finalButtonClass = buttonClass || ''
//         var finalDropdownClass = 'dropdown-content'
//         if(dropdownClass)
//             finalDropdownClass = `${finalDropdownClass} ${dropdownClass}`
//         if(upwards)
//             finalDropdownClass = `${finalDropdownClass} upwards`
//         if(label)
//             finalDropdownClass = `${finalDropdownClass} right`
//         if(center)
//             finalDropdownClass = `${finalDropdownClass} center`
//         if(middle)
//             finalDropdownClass = `${finalDropdownClass} middle`
//         if(limitHeight)
//             finalDropdownClass = `${finalDropdownClass} limit-height`

//         var buttonDiv = <React.Fragment>
//             {label && <label className="label noselect">{label}</label>}
//             {(title || selectedText) && <Button onClick={this.showMenu} className={finalButtonClass}>
//                 {this.state.selected != null && selectedText?selectedText:title}
//             </Button>}
//             {icon && <IconButton onClick={this.showMenu} icon={icon} className={buttonClass}/>}
//         </React.Fragment>


//         var dropdownDiv = null
//         if(this.state.showMenu) {
//             if(sidebar) {
//                 dropdownDiv = (<div className="sidebar-wrapper fadeIn">
//                     <div className="sidebar slideInX">
//                         <div className={finalDropdownClass} ref={(el) => {this.dropdownMenu = el}}>
//                             {renderItems}
//                         </div>
//                     </div>
//                     <div className="button-wrapper">
//                         {buttonDiv}
//                     </div>
//                 </div>)
//             } else {
//                 dropdownDiv = (<div className={finalDropdownClass} ref={(el) => {this.dropdownMenu = el}}>
//                     {renderItems}
//                 </div>)
//             }
//         }

//         return (
//             <div className={`${className?className:''} dropdown-menu`} style={style} onClick={(e) => {e.stopPropagation()}}>
//                 {buttonDiv}
//                 {dropdownDiv}
//             </div>
//         )
//     }
// }

