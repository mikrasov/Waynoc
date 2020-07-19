import React from "react"
import {Table} from "react-bootstrap"

export default ({className, relationships}) => {

    if(!relationships || !Object.keys(relationships).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>
        <tbody>

            {Object.entries(relationships).map(([key, value]) =>
                <tr key={key}><td>{key}: {value.closeness}</td></tr>
            )}

        </tbody>
    </Table>

}
