import React, { useState } from "react";
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

export default function ConfirmRemovalModal(props) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(previous => ({
            modal: !previous.modal
        }));
    };

    const deletePlayer = pk => {
        axios.delete(API_URL + pk).then(() => {
            props.resetState();
            toggle();
        });
    };

    return (
        <>
            <Button color="danger" onClick={() => toggle()}>
                Remove
            </Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Do you really wannt to delete the player?
                </ModalHeader>

                <ModalFooter>
                    <Button type="button" onClick={() => toggle()}>
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        color="primary"
                        onClick={() => deletePlayer(props.pk)}
                    >
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
