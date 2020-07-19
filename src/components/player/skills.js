import React from "react"
import {Table} from "react-bootstrap"


export default ({skills}) => {
    return <Table striped bordered hover>

        <tbody>

            {Object.entries(skills).map(([skill, value]) =>
                <tr key={skill}><td>{skill}: {value.value} ({value.xp})</td></tr>
            )}

        </tbody>
    </Table>

}
