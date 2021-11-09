import React from 'react';
import { Modal } from "react-bootstrap";

const ModalWrapper = (props) => {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
};

export default ModalWrapper;