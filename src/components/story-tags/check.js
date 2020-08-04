import React from "react"


export default function ({stat, value, children}){

    return <>

        <h4>Check ({stat} >= {value})</h4>
        <div style={ {borderLeft: "1px solid #F99", paddingLeft:"5px"} }>
            {children}
        </div>
    </>

}

