import React from "react"
import { ReactNode } from "react"

 const Tooltip = ({ message, children }:{message:string, children:ReactNode}) => {
    return (
    <div className="group relative flex">
        {children}
        <span className="absolute top-0 left-0 scale-0 transition-all rounded bg-zinc-900 p-1 text-xs text-white group-hover:scale-100">{message}</span>
    </div>
    )
}

export default Tooltip