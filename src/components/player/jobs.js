import React from "react"
import {Table} from "react-bootstrap"
import Info from "../info";


export default ({className, jobs}) => {

    if(!jobs || !Object.keys(jobs).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(jobs).map(([job, value]) =>
                <tr key={job}><td><Info name="job" field={job} /></td></tr>
            )}

        </tbody>
    </Table>

}
