import React, { ReactNode } from 'react'

const RouteLayout = ({children} : {children: ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default RouteLayout