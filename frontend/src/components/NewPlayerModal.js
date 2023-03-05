import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import NewPlayerForm from "./NewPlayerForm";

export default function NewPlayerModal(props) {
    const [modalState, setModalState] = useState({ modal: false })

    const toggle = () => {
        setModalState(previous => ({
            modal: !previous.modal
        }));
    };

    const create = props.create;

    var title = "Editing Player";
    var button = <Button onClick={toggle}>Edit</Button>;
    if (create) {
        title = "Creating New Player";

        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={toggle}
                style={{ minWidth: "200px" }}
            >
                Create New
            </Button>
        );
    }

    return (
        <>
            {button}
            <Modal isOpen={modalState.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>

                <ModalBody>
                    <NewPlayerForm
                        resetState={props.resetState}
                        toggle={toggle}
                        player={props.player}
                    />
                </ModalBody>
            </Modal>
        </>
    );
}

