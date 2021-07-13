// import React from "react"
// import { fnc } from 'helpers'
// import { IconButton } from 'Components'
// import { BaseComponent } from 'App'

// const maxAutoCompleteItems = 25

// export class Input extends BaseComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value:this.props.defaultText||"",
//             autocomplete:this.props.showAutoComplete?this.props.autoComplete:[],
//             autocompleteIndex:-1,
//             activeElement:null,
//         }

//         this.onChange = this.onChange.bind(this)
//         this.onKeyDown = this.onKeyDown.bind(this)
//         this.focus = this.focus.bind(this)
//         this.inputRef = React.createRef()
//         this.setSelectionRange = this.setSelectionRange.bind(this)
//         this.getAutoComplete = this.getAutoComplete.bind(this)
//         this.calculateAutoComplete = this.calculateAutoComplete.bind(this)
//         this.submit = this.submit.bind(this)
//         this.handleBlur = this.handleBlur.bind(this)
//         this.handleFocus = this.handleFocus.bind(this)
//         this.clear = this.clear.bind(this)
//         this.delayTimeout = null
//     }

//     componentDidMount() {
//         super.componentDidMount()
//         if(this.props.autoComplete) {
//             setTimeout(() => {
//                 window.addEventListener('click', this.handleBlur)
//             },0)
//         }
//     }

//     componentWillUnmount() {
//         super.componentWillUnmount()
//         if(this.props.autoComplete) {
//             window.removeEventListener('click', this.handleBlur)
//         }
//     }

//     handleBlur(e) {
//         e.preventDefault()
//         setTimeout(() => {
//             if(this.props.onBlur)
//                 this.props.onBlur(this.state.value)
//             if(this.inputRef.current)
//                 this.inputRef.current.blur()
//             this.changeState({activeElement:null})
//         }, 100)

//     }

//     handleFocus() {
//         this.changeState({activeElement:this.inputRef.current, autocompleteIndex:-1})
//     }

//     onChange(e) {
//         if(this.props.autoComplete) {
//             var auto = this.calculateAutoComplete(e.target.value)
//             this.changeState({value:e.target.value, autocomplete:auto, autocompleteIndex:auto.indexOf(e.target.value)})
//         } else {
//             this.changeState({value:e.target.value})
//         }
//         if(this.props.onChange) {

//             if(this.props.delayChange) {
//                 let value = e.target.value
//                 if(this.delayTimeout)
//                     clearTimeout(this.delayTimeout) 
//                 this.delayTimeout = setTimeout(() => {
//                     this.props.onChange(value)
//                 }, 500)

//             } else {
//                 this.props.onChange(e.target.value)
//             }
//         }
//     }

//     onKeyDown(e) {
//         if(e.key == 'Enter') {
//             this.submit(this.state.value)
//         } else if(e.key == 'ArrowUp') {
//             this.state.autocompleteIndex = this.state.autocompleteIndex - 1
//             if(this.state.autocompleteIndex < 0)
//                 this.state.autocompleteIndex = this.props.autoComplete.length-1

//             this.state.value = this.state.autocomplete[this.state.autocompleteIndex]
//             this.changeState({...this.state})
//         } else if(e.key == 'ArrowDown') {
//             this.state.autocompleteIndex = this.state.autocompleteIndex + 1
//             if(this.state.autocompleteIndex > this.props.autoComplete.length-1)
//                 this.state.autocompleteIndex = 0
//             this.state.value = this.state.autocomplete[this.state.autocompleteIndex]
//             this.changeState({...this.state})
//         }
//     }

//     calculateAutoComplete(value) {
//         value = value.toLowerCase()
//         var ret = this.props.autoComplete
//         .map(x => {
//             var levScore = x.length - fnc.levDist(x, value)
//             var containsScore = x.includes(value)?10:0
//             var index = x.indexOf(value)
//             var indexMod = (x.length-index)/x.length 
//             if(index != -1) {
//                 containsScore *= (1 + indexMod*2)
//             }
//             var score = levScore + containsScore
//             return {val:x, score:score}
//         })
//         .sort((a, b) => {
//             return b.score - a.score
//         })
//         .filter((x,ix) => {
//             if(value != '')
//                 return (ix < 10 && x.score > 0) || ix < 5
//             else
//                 return ix < maxAutoCompleteItems
//         }).map(x => {
//             return x.val
//         })
//         return ret
//     }

//     submit(x) {
//         if(this.props.onSubmit) {
//             this.props.onSubmit(x)
//         }
//         var newState = {}

//         if(this.props.clearOnSubmit) {
//             newState.value = ''
//             newState.autocompleteIndex = -1
//         }
//         if(!this.props.showAutoComplete) {
//             newState.autocomplete = [] 
//             newState.autocompleteIndex = -1
//         }

//         if(this.props.focusOnSubmit) {
//             focus()
//         } else {
//             // this.inputRef.current.blur()
//         }

//         this.changeState(newState)
//     }

//     focus() {
//         this.inputRef.current.focus()
//     }

//     setSelectionRange(start, run) {
//         this.inputRef.current.setSelectionRange(start, run)
//     }

//     getAutoComplete() {
//         return <div className="dropdown-content">
//             {this.state.autocomplete.map(x => {
//                 return <div key={x} className={`dropdown-item ${this.state.value == x?'dropdown-selected':''}`} 
//                     onClick={
//                         (e) => {
//                             e.preventDefault()
//                             e.stopPropagation()
//                             this.changeState({value:x})
//                             this.submit(x)
//                          }
//                      }>{x}</div>
//             })}
//         </div>
//     }

//     clear() {
//         this.changeState({value:''})
//         if(this.props.onChange)
//             this.props.onChange('')
//     }
  
//     render() {
//         const {
//             large,
//             defaultText,
//             autoComplete,
//             onBlur,
//             className,
//             onChange,
//             delayChange,
//             clear,
//             ...inputProps
//         } = this.props

//         if(autoComplete) {
//             return (
//                 <div className="inputWrapper">
//                     <div className="inputWrapper">
//                         {this.props.label && <h2 className="label">{this.props.label}</h2>}
//                         <input className={`input${large?' input-large':''} ${className?className:''}`} ref={this.inputRef} value={this.state.value}
//                             onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.onChange} onKeyDown={this.onKeyDown} {...inputProps}/>
//                         {clear && this.state.value.length > 0 && <IconButton small icon="fas fa-times" onClick={()=>{this.clear}}/>}
//                     </div>
//                     <div className="inputWrapper">
//                         {this.state.activeElement != null && this.state.activeElement == this.inputRef.current && this.getAutoComplete()}
//                     </div>
//                 </div>
//             )

//         } else {
//             return (
//                 <div className="inputWrapper">
//                     {this.props.label && <h2 className="label">{this.props.label}</h2>}
//                     <input className={`input${large?' input-large':''} ${className?className:''}`} ref={this.inputRef} value={this.state.value}
//                         onBlur={this.handleBlur} onChange={this.onChange} onKeyDown={this.onKeyDown} {...inputProps}/>
//                     {clear && this.state.value.length > 0 && <IconButton small icon="fas fa-times" onClick={this.clear}/>}
//                 </div>
//             )
//         }
//     }
// }

