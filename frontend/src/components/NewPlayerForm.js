import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

export default function NewPlayerForm(props) {
    const [player, setPlayer] = useState({
        pk: 0,
        name: "",
        email: "",
    })

    useEffect(() => {
        if (props.player) {
            const { pk, name, email } = props.player;
            setPlayer({ pk, name, email });
        }
    }, [props.player])

    const onChange = e => {
        setPlayer(prev => ({ ...prev, ...{ [e.target.name]: e.target.value } }));
    };

    const createPlayer = e => {
        e.preventDefault();
        axios.post(API_URL, player).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const editPlayer = e => {
        e.preventDefault();
        axios.put(API_URL + player.pk, player).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    return (
        <Form onSubmit={props.player ? editPlayer : createPlayer}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={defaultIfEmpty(player.name)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={defaultIfEmpty(player.email)}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
}
