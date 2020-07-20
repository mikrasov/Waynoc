import React from "react"

export default ({className, age}) => <span className={className}>

    {Math.floor(age)} years {(age % 1) * 12} months

</span>

