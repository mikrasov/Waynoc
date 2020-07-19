import React from "react"
import {Table} from "react-bootstrap"


export default ({className, tags}) => {

    if(!tags || !Object.keys(tags).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(tags).map(([key, value]) =>
                <tr key={key}><td>{key}: {value}</td></tr>
            )}

        </tbody>
    </Table>

}
