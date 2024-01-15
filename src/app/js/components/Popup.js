import React, { useState, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Image } from 'react-bootstrap';
import close from '../../style/images/close.svg';
import { notUndefinedAndNull } from '../utils/Validation';

function Popup(props) {

    function renderBody() {
        if (notUndefinedAndNull(props.bodyClassName)) {
            return (
                <Modal.Body className={props.bodyClassName}>
                    {props.content}
                </Modal.Body>
            )
        } else {
            return (
                <Modal.Body className="overflow-hidden pb-0">
                    {props.content}
                </Modal.Body>
            )
        }
    }

    return (
        <Fragment>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                dialogClassName={props.dialogClassName}
            >
                <Modal.Header>
                    {notUndefinedAndNull(props.titleClassName) ?
                        <h4 className={props.titleClassName}>{props.title}</h4> :
                        <h4 className="primary-clr f-18 bold mb-0">{props.title}</h4>
                    }
                    <Image src={close} className="close opacity-1" onClick={props.handleClose} />
                </Modal.Header>
                {renderBody()}
            </Modal>
        </Fragment>
    );
}

export default Popup