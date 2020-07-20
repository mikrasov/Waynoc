import React from "react"
import {Table} from "react-bootstrap"

export default ({training}) => {

    return <>
        <h2>{training.title} </h2>
        <Table striped bordered hover>

            <tbody>

            {training.activities.map((activity, index) => {

                    return <tr key={index}>
                        <td>{activity.label}</td>
                    </tr>
                }
            )}

            </tbody>
        </Table>
    </>
}
