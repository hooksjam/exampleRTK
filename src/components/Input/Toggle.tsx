// import React from "react"

// export class Toggle extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selected:this.props.default||0,
//         }
//         if(this.props.defaultValue) {
//             this.state.selected = this.props.options.findIndex(x => x.value == this.props.defaultValue)
//         }
//         this.select = this.select.bind(this)
//     }

//     componentDidUpdate() {
        
//     }

//     select(e, ix) {
//         e.stopPropagation()
//         var option = this.props.options[ix]
//         if(ix == this.state.selected) {
//             // Toggle singles on/off
//             if(this.props.options.length == 1) 
//                 this.setState({selected:-1})
//         } else {
//             this.setState({selected:ix})
//         }

//         if(this.props.onSelect) {
//             console.log("OPTION", option)
//             if(typeof(option) == 'object' && 'value' in option)
//                 this.props.onSelect(option.value)
//             else
//                 this.props.onSelect(option)
//         }
//     }
  
//     render() {
//         var {
//             className,
//             style,
//             ...other
//         } = this.props

//         className = `toggle ${className?className:''}`


//         return (
//             <div className={className} style={style}>
//                 {this.props.label && <label className="label noselect">{this.props.label}</label>}
//                 <div className="select">
//                 {this.props.options.map((x,ix) => {
//                     var optionText = ''
//                     if(typeof(x) == 'object' && x.text != null)
//                         optionText = x.text
//                     else
//                         optionText = x
//                     return <div key={ix} className={`option noselect ${ix==this.state.selected?'selected':''}`} onClick={(e) => {this.select(e, ix)}}><label>{optionText}</label></div>
//                 })}
//                 </div>
//             </div>
//         )
//     }
// }

