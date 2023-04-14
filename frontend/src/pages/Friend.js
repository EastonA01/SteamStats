import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";
import moment from 'moment'

import { useLocation, useNavigate } from "react-router-dom";

export default function Friend() {
    const [friend, setFriend] = useState([])
    const [steamID, setSteamID] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getFriend(location?.state?.id)
    }, [location])

    function getFriend(temporaryVariable) {
        if (!temporaryVariable)
            temporaryVariable = steamID
        console.log("steamID", steamID)
        if (!steamID)
            return
        axios.get(API_RAW + `friends/${steamID}/`)
            .then(res => {
                let tempList = []
                res.data.forEach(
                    i => {
                        tempList.push(<tr>
                            <td><div>
                                <button onClick={() => { navigate("/recently_played", { state: { id: i.steamid } }) }} className="goButton">Recently Played</button>
                                <button onClick={() => { navigate("/user", { state: { id: i.steamid } }) }} className="goButton">User Stats</button>
                                <button onClick={() => { navigate("/owned", { state: { id: i.steamid } }) }} className="goButton">Owned Games</button>
                                <button onClick={() => { navigate("/friend", { state: { id: i.steamid } }) }} className="goButton">Friends</button>
                                <button onClick={() => { navigate("/user", { state: { id: i.steamid } }) }} className="goButton">User</button>
                            </div>
                            </td>
                            <td><img src={i.avatarfull} alt="avatars" /></td>
                            <td>{i.personaname}</td>
                            <td>{i.steamid}</td>
                            <td>{moment.unix(i.friend_since).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        </tr>)
                    }
                )
                setFriend(tempList)
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
                <button onClick={() => getFriend()}>GO!!!!</button>
            </label>
            <table>
                <th>User Navigation</th>
                <th></th>
                <th>Username</th>
                <th>SteamID</th>
                <th>Friends Since</th>
                {friend}
            </table>
        </div>
    )

}