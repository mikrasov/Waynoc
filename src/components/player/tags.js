import React from "react"
import {Table} from "react-bootstrap"
import Info from "../info"

export default function ({className, tags}) {

    if(!tags || !Object.keys(tags).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(tags).map(([tag, value]) =>
                <tr key={tag}><td><Info name="tag" field={tag} /></td></tr>
            )}

        </tbody>
    </Table>

}
