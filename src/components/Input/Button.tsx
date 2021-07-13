// import React from "react"

// export class Button extends React.Component {
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
//             className,
//             large,
//             ...buttonProps
//         } = this.props

//         return (
//             <button className={`button noselect${large?' button-large':''} ${className?className:''}`} onClick={this.click} {...buttonProps}>
//                 <label>
//                     {this.props.children}
//                 </label>
//             </button>
//         )
//     }
// }

