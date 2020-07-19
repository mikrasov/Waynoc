import React from "react"
import {Table} from "react-bootstrap"


export default ({className, jobs}) => {

    if(!jobs || !Object.keys(jobs).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(jobs).map(([key, value]) =>
                <tr key={key}><td>{key}: {value}</td></tr>
            )}

        </tbody>
    </Table>

}
