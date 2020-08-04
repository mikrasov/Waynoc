import React from "react"
import {Table} from "react-bootstrap"
import Info from "../story-tags/info";


export default ({skills}) => {
    return <Table striped bordered hover>

        <tbody>

            {Object.entries(skills).map(([skill, value]) =>
                <tr key={skill}><td><Info name="skill" field={skill} />: {value.value} ({value.xp} XP)</td></tr>
            )}

        </tbody>
    </Table>

}
