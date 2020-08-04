import React from "react"


export default function ({stat, value, children}){

    return <>

        <span>Check ({stat} >= {value})</span>
        <span style={ {borderLeft: "1px solid #F99", paddingLeft:"5px", display:"block"} }>
            {children}
        </span>
    </>

}

