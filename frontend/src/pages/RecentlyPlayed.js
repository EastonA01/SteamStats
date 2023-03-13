import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";


export default function RecentlyPlayed() {
    const [user, setUser] = useState([])
    const [steamID, setSteamID] = useState("")



    //useEffect(() => {
    //     getRecentlyPlayedGames()
    // }, [])

    function getRecentlyPlayedGames() {
        if (!steamID)
            return
        axios.get(API_RAW + `recentlyPlayed/${steamID}/`).then(res => setUser(res.data));
    }





    return (
        <div className="App">
            <label>Enter your SteamID:
                <input
                    type="text"
                    value={steamID}
                    onChange={(e) => setSteamID(e.target.value)}
                />
                <button onClick={() => getRecentlyPlayedGames()}>GO!!!!</button>
            </label>
            <h3>{JSON.stringify(user)}</h3>

        </div>
    )

}