import axios from "axios";
import React, { useState } from "react";

import { API_RAW } from "../constants";

export default function OwnedGames() {
    const [ownedList, setOwnedList] = useState([])
    const [steamID, setSteamID] = useState("");

    function getOwnedGames() {
        if (!steamID)
            return
        axios.get(API_RAW + `ownedGames/${steamID}/`)
            .then(res => {
                setOwnedList(res.data)
            });
    }


    return (
        <div className="App">
            <label>Enter your SteamID:
                <input
                    type="text"
                    value={steamID}
                    onChange={(e) => setSteamID(e.target.value)}
                />
                <button onClick={() => getOwnedGames()}>GO!!!!</button>
            </label>
            <br />
            <h3>{JSON.stringify(ownedList)}</h3>
        </div>
    )

}