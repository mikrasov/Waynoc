import React from "react"


export default function ({stat, value, children, silent}){
    if(silent || silent==="") return <></>//Don't print nodes with silent flag

    return <>

        <span>Check ({stat} >= {value})</span>
        <span style={ {borderLeft: "1px solid #F99", paddingLeft:"5px", display:"block"} }>
            {children}
        </span>
    </>

}

