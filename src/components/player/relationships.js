import React from "react"
import {Table} from "react-bootstrap"
import Info from "../story-tags/info";

export default ({className, relationships}) => {

    if(!relationships || !Object.keys(relationships).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>
        <tbody>

            {Object.entries(relationships).map(([relationship, value]) =>
                <tr key={relationship}><td><Info name="relationship" field={relationship} />: {value.closeness}</td></tr>
            )}

        </tbody>
    </Table>

}
