// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fnc } from 'Helpers'
// import { StreamActions, MenuActions, UserActions, StuffActions } from 'Actions'
// import { UserServices } from 'Services'

// import { Stream, Tile, PreviewTile, Mosaic, Button, Toggle, IconButton, OptionsMenu, Input } from 'Components'
// import { previewIterator } from 'Helpers'
// import { AppConstants, UserConstants } from 'Constants'

// const notHeight = 45 
// const notSpacing = 10 

// class Notification extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//         this.handleClick = this.handleClick.bind(this)
//     } 

//     handleClick(e) {
//         if(this.props.onClick) {
//             this.props.onClick()
//         }
//     }

//     render() {
//         const {
//             id,
//             text,
//             at,
//             expired,
//             job,
//             level,
//             ...other
//         } = this.props.notification

//         var style = {
//             opacity:expired?0:1,
//             right:expired?'-100px':0,
//             top:`${this.props.index*(notHeight + notSpacing)}px`
//         }
//         var className = `notification notification-${level}`// animate__animated ${expired?'animate__backOutRight':'animate__backInRight'}`

//         if(level == 'job') {
//             var progressStyle = {width: `${job.progress}%`}
//             var secondaryProgressStyle= {width: 0}
//             var jobText
//             var loadingStyle = {opacity:0}
//             switch(job.status) {
//                 case 'ready':
//                 case 'uploading':
//                     jobText = job.message || 'Uploading'
//                     loadingStyle.opacity = 1
//                     break
//                 case 'processing':
//                     jobText = job.message || 'Processing'
//                     if(job.processingTotal > 0) {
//                         secondaryProgressStyle.width = `${100*job.processingProgress/job.processingTotal}%`
//                     } else {
//                         secondaryProgressStyle.width = 0
//                     }
//                     loadingStyle.opacity = 1
//                     break
//                 case 'error':
//                     jobText = `Upload error: ${job.error}`
//                     secondaryProgressStyle.backgroundColor = 'red'
//                     secondaryProgressStyle.transition = 'background-color linear 500ms'
//                     secondaryProgressStyle.width = '100%'

//                     progressStyle.backgroundColor = 'red'
//                     progressStyle.transition = 'background-color linear 500ms'
//                     progressStyle.width = '100%'
//                     break
//                 case 'complete':
//                     jobText = job.message || 'Stuff Ready!'
//                     progressStyle.width = '100%'
//                     secondaryProgressStyle.width = '100%'
//                     break
//             }
//             if(job.status == 'complete' || job.status == 'error')
//                 className = `${className} animate__animated animate__headShake`
//             return <div className={className} style={style} onClick={this.handleClick}> 
//                 <span>{jobText}</span> 
//                 <div className="sk-rotateplane" style={loadingStyle}/>
//                 <div className="progress" style={progressStyle}/>
//                 {job.processingTotal > 0 && <div className="progress progress-secondary" style={secondaryProgressStyle}/>}
//             </div>

//         } else if(level == 'error') {
//             return <div className={className} style={style} onClick={this.handleClick}> 
//                 <span className="noselect">{text}</span> 
//             </div>
//         } else {
//             return <div className={className} style={style} onClick={this.handleClick}> 
//                 <span className="noselect">{text}</span> 
//             </div>
//         }
//     }
// }

// class Notifications extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             notifications:{},
//             notificationFifo:[],
//             updatedJobs:[],
//         }

//         this.getNotifications = this.getNotifications.bind(this)
//         this.initTicker = this.initTicker.bind(this)
//         this.ticker = this.initTicker()
//         this.dismissNotification = this.dismissNotification.bind(this)
//         this.handleJobComplete = this.handleJobComplete.bind(this)
//         this.handleNotificationClick = this.handleNotificationClick.bind(this)
//     } 

//     initTicker() {
//         function onTick() {
//             // Check for expired notifications
//             var update = false
//             for(let i = this.state.notificationFifo.length-1; i >= 0; i--) {
//                 var not = this.state.notifications[this.state.notificationFifo[i]]
//                 if(not.level != 'job' || not.complete || not.expired) {
//                     if(!not.expired) {
//                         var elapsed = Date.now() - not.at
//                         if(elapsed > AppConstants.notificationTime) {
//                             update = true
//                             not.expired = true
//                             not.expiredAt = Date.now()
//                         }
//                     } else {
//                         var elapsed = Date.now() - not.expiredAt
//                         if(elapsed > AppConstants.animTime*2) {
//                             update = true
//                             this.state.notificationFifo.splice(i, 1)
//                         }
//                     }
//                 } else if((not.job.status == 'error' || not.job.status == 'complete') && !not.complete) {
//                     update = true
//                     not.complete = true
//                     not.at = Date.now() - AppConstants.notificationTime*0.5
//                 }
//             }
//             if(update)
//                 this.setState({notificationFifo:this.state.notificationFifo})
//             return this.state.notificationFifo.length
//         }

//         function afterTick(notificationCount) {
//             return notificationCount > 0
//         }

//         return new fnc.Ticker(AppConstants.notificationInterval, {onTick:onTick.bind(this), afterTick:afterTick.bind(this)})
//     }

//     componentDidMount() {
//     }

//     componentWillUnmount() {
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(this.state.notificationFifo.length > 0) {
//             this.ticker.startTick(false)
//         }

//         // Check for change of job status
//         for(let i = 0; i < this.state.updatedJobs.length; i++) {
//             if(this.state.updatedJobs[i].status == 'complete') {
//                 this.handleJobComplete(this.state.updatedJobs[i])
//             }
//         }
//     }

//     handleJobComplete(job) {
//         switch(job.type) {
//             default:
//             break
//         }
//     }

//     handleNotificationClick(job) {
//         switch(job.type) {
//             default:
//             break
//         }
//     }

//     static getDerivedStateFromProps(nextProps, prevState ) {
//         var newNot = []
//         for(let i = 0; i < nextProps.notifications.length; i++) {
//             var notification = nextProps.notifications[i]
//             if(!(notification.id in prevState.notifications)) {
//                 newNot.push({...notification, at:Date.now()})
//             }
//         }


//         var newState = {...prevState, updatedJobs:[]}
//         var update = false
//         for(var key in nextProps.jobs) {
//             var job = nextProps.jobs[key]
//             var id = job._id
//             var existing = prevState.notifications[id]

//             if(!existing || existing.job.status != job.status) {
//                 newState.updatedJobs.push(job)
//                 update = true

//                 if(!existing || existing.expired) {
//                     newNot.push({id:id, at:Date.now(), level:'job', job})
//                 }
//             }

//             if(existing && !existing.expired) {
//                 existing.job = job
//                 update = true
//             }
//         }
//         for(let i = 0; i < newNot.length; i++) {
//             newState.notifications[newNot[i].id] = newNot[i]
//             newState.notificationFifo.push(newNot[i].id)
//         }
//         if(newNot.length > 0 || update) {
//             return newState
//         } else {
//             return {}
//         }
//     }

//     dismissNotification(id) {
//         if(id in this.state.notifications) {
//             var not = this.state.notifications[id]
//             if(not.expired)
//                 return

//             not.expired = true
//             not.expiredAt = Date.now()
//             this.setState({...this.state})

//             // If its a job notification thats done, focus the stream here
//             if(not.level == 'job' && not.job.status == 'complete') {
//                 this.handleNotificationClick(not.job)
//             }
//         }
//     }
//     getNotifications() {
//         // Combine menu notifications with stuff job progress
//         var index = 0

//         return this.state.notificationFifo.map((x,ix) => {
//             let not = this.state.notifications[x]
//             var ret = <Notification key={not.id} index={index} notification={not} onClick={() => {this.dismissNotification(not.id)}}/>
//             if(!not.expired)
//                 index++
//             return ret
//         })
//     }

//     render() {

//         if(this.state.notifications.length == 0)
//             return null

//         return (
//             <div className="notifications">
//                 {this.getNotifications()}
//             </div>
//         )
//     }
// }

// function mapState(state, ownProps) {
//     const { user, stuff, menu, stream } = state
//     return { user, notifications:menu.notifications } 
// }


// const actionCreators = {
// }

// const connectedNotifications = connect(mapState, actionCreators)(Notifications)
// export { connectedNotifications as Notifications };