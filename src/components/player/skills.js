import React from "react"
import {Table} from "react-bootstrap"


export default ({className, skills}) => {

    if(!skills || !Object.keys(skills).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(skills).map(([key, value]) =>
                <tr key={key}><td>{key}: {value}</td></tr>
            )}

        </tbody>
    </Table>

}
