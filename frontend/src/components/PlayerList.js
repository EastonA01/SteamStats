import React from "react";
import { Table } from "reactstrap";
import NewPlayerModal from "./NewPlayerModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

export default function PlayerList(props) {
    const players = props.players;
    console.log(players)
    return (
        <Table dark>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed?</th>
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
                    players.map(hub => (
                        <tr key={hub.pk}>
                            <td>{hub.title}</td>
                            <td>{hub.description}</td>
                            <td>{hub.completed + ""}</td>
                            <td align="center">
                                <NewPlayerModal
                                    create={false}
                                    hub={hub}
                                    resetState={props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={hub.pk}
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

