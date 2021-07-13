import React from "react"

interface SpinnerProps {
    type: string,
}

export function Spinner(props:SpinnerProps) {
    const type = props.type || 'cube'
    const style = { opacity: 1 }

    switch(type) {
        case 'cube':
        return (
            <div className="spinnerWrap" style={style}>
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            </div>)
        break
    }
    return null
}

