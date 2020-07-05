import React from "react";
import {Modal, Button} from "react-bootstrap"

export default function(props) {
    const event = props.event

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
                <Modal.Title>{event?.flavor_text}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{event?.body}</Modal.Body>
            <Modal.Footer>
                {event?.controls && event.controls.map((control)=>

                    <Button key={control.label} variant="primary" onClick={(e)=>{control.action(); props.onClose();}}>{control.label}</Button>
                )}

            </Modal.Footer>
        </Modal>
    )



}

