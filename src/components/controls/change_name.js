import React, { useState } from "react"
import {Form, Button} from "react-bootstrap"
import {connect} from "react-redux"
import {changePlayerName, setActiveEvent} from "../../state"
import {resolveInput} from "../../compiler"
function ChangeName({dispatch, events}) {

    const [name,setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }

    function submit() {
        dispatch(changePlayerName(name))
        dispatch(setActiveEvent(resolveInput(events.activeEvent, `Your parents seem to call you ${name}`)))
    }

    return <Form inline>
            <Form.Control type="text" placeholder="Your Name" name="name"  onChange={ handleChange }/>

        <Button type="button" disabled={name.length<=1} onClick={submit} >Select Name</Button>
    </Form>

}
export default connect(state => ({ events: state.events}), null)(ChangeName)
