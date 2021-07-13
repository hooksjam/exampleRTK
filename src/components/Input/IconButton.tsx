// import React from "react"

// export class IconButton extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }

//         this.click = this.click.bind(this)
//     }

//     click(e) {
//         if(this.props.onClick) {
//             this.props.onClick(e)
//         }
//     }
  
//     render() {
//         const {
//             id,
//             icon,
//             className,
//             large,
//             small,
//             noBG,
//             ...other
//         } = this.props

//         var attrs = [icon, className, noBG?'no-bg':'',large?'button-large':'',small?'button-small':''].filter(x => {return x != null}).join(' ')
//         return (
//             <div id={id?id:null} className={`icon-button noselect ${attrs}`} style={this.props.style} onClick={this.click} {...other}>
//             </div>
//         )
//     }
// }

