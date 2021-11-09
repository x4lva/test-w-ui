import React from 'react';
import './BoardModal.scss';
import ModalWrapper from "../../Wrappers/ModalWrapper/ModalWrapper";

const BoardModal = ({title, content, show, onHide}) => {
    return (
        <ModalWrapper size={"md"} show={show} onHide={onHide}>
            <div className="board-modal">
                <div className="board-modal-header">
                    {title}
                </div>
                <div className="board-modal-content">
                    {content}
                </div>
            </div>
        </ModalWrapper>
    );
};

export default BoardModal;