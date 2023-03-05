import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import NewPlayerModal from "./components/NewPlayerModal";
import PlayerList from "./components/PlayerList";
import { API_URL } from "./constants";

export default function Home(props) {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayers()
    }, [])

    const getPlayers = () => {
        axios.get(API_URL).then(res => setPlayers(res.data));
    };

    const resetState = () => {
        getPlayers();
    };

    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col>
                    <PlayerList
                        players={players}
                        resetState={resetState}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewPlayerModal create={true} resetState={resetState} />
                </Col>
            </Row>
        </Container>
    );
}
