import React from "react"
import {Table} from "react-bootstrap"
import Info from "../info";


export default ({className, items}) => {

    if(!items || !Object.keys(items).length)
        return <p className={className}> None</p>

    return <Table className={className} striped bordered hover>

        <tbody>

            {Object.entries(items).map(([item, value]) =>
                <tr key={item}><td><Info name="item" field={item} /></td></tr>
            )}

        </tbody>
    </Table>

}
