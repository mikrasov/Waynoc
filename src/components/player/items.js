import React from "react"
import {Table} from "react-bootstrap"


export default ({className, items}) => {

    if(!items || !Object.keys(items).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(items).map(([key, value]) =>
                <tr key={key}><td>{key}</td></tr>
            )}

        </tbody>
    </Table>

}
