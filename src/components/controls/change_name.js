import React, { useState } from "react"
import {Form, Button} from "react-bootstrap"
import {connect} from "react-redux"
import {changePlayerName, setActiveEvent} from "../../state"
import {resolveInput} from "../../transformer"

const {upperFirst} = require('lodash')

function ChangeName({dispatch, game}) {

    const [name,setName] = useState("")

    function handleChange(e) {
        setName( upperFirst(e.target.value) )
    }

    function submit() {
        dispatch(changePlayerName(name))
        dispatch(setActiveEvent(resolveInput(game.activeEvent, `Your parents seem to call you <strong>${name}</strong>`)))
    }

    return <Form inline>
            <Form.Control type="text" placeholder="Your Name" name="name"  onChange={ handleChange }/>

        <Button type="button" disabled={name.length<=1} onClick={submit} >Select Name</Button>
    </Form>

}
export default connect(state => ({ game: state.game}), null)(ChangeName)
