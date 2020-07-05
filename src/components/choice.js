import React from "react";
import {Modal, Button} from "react-bootstrap"
import {connect} from "react-redux";

function ChoiceModal({player, dispatch, event, onClose}) {

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

                    <Button key={control.label} variant="primary" onClick={(e)=>{ dispatch( control.action() ); onClose();}}>{control.label}</Button>
                )}

            </Modal.Footer>
        </Modal>
    )
}


export default connect(state => ({
    player: state.player
}), null)(ChoiceModal)
