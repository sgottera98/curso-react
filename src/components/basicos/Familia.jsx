import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
            {/* {cloneElement(props.children, { ...props })} */}
            {React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}
        </div>
    )
} 