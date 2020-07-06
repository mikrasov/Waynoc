import React from "react"
import {Modal, Button} from "react-bootstrap"
import {connect} from "react-redux"

function ChoiceModal({player, dispatch, event, onClose}) {

    function selectChoice(control){
        const effect =  control.action()
        event.resolved(effect.effect_text)
        dispatch(effect)
        onClose()
    }


    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={!!event}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>{event?.flavor}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{event?.body}</Modal.Body>
            <Modal.Footer>
                {event?.controls && event.controls.map((control)=>

                    <Button key={control.label} variant="primary" onClick={(e)=>{ selectChoice(control) }}>{control.label}</Button>
                )}

            </Modal.Footer>
        </Modal>
    )
}



export default connect(state => ({
    player: state.player
}), null)(ChoiceModal)
