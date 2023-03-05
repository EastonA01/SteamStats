import React from "react";
import { Table } from "reactstrap";
import NewPlayerModal from "./NewPlayerModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

export default function PlayerList(props) {
    const players = props.players;
    return (
        <Table dark>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!players || players.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, no one here yet</b>
                        </td>
                    </tr>
                ) : (
                    players.map(player => (
                        <tr key={player.pk}>
                            <td>{player.name}</td>
                            <td>{player.email}</td>
                            <td>{player.registrationDate}</td>
                            <td align="center">
                                <NewPlayerModal
                                    create={false}
                                    player={player}
                                    resetState={props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={player.pk}
                                    resetState={props.resetState}
                                />
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
}

