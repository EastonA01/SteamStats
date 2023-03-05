import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

export default function NewPlayerForm(props) {
    const [player, setPlayer] = useState({
        pk: 0,
        title: "",
        description: "",
    })

    useEffect(() => {
        if (props.player) {
            const { pk, title, description } = props.player;
            setPlayer({ pk, title, description });
        }
    }, [props.player])

    const onChange = e => {
        setPlayer(prev => ({ ...prev, ...{ [e.target.title]: e.target.value } }));
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
                <Label for="title">Name:</Label>
                <Input
                    type="text"
                    title="title"
                    onChange={onChange}
                    value={defaultIfEmpty(player.title)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Email:</Label>
                <Input
                    type="description"
                    title="description"
                    onChange={onChange}
                    value={defaultIfEmpty(player.description)}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
}
