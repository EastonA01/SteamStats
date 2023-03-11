import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";
import moment from 'moment'

export default function Friend() {
    const [friend, setFriend] = useState([])
    const [steamID, setSteamID] = useState("");

    // useEffect(() => {
    //     getFriend()
    // }, [])

    function getFriend() {
        console.log("steamID", steamID)
        if (!steamID)
            return
        axios.get(API_RAW + `friends/${steamID}/`)
            .then(res => {
                let tempList = []
                res.data.forEach(
                    i => {
                        tempList.push(<tr>
                            <td><img src={i.avatarfull} /></td>
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
                <th></th>
                <th>Username</th>
                <th>SteamID</th>
                <th>Friends Since</th>
                {friend}
            </table>
        </div>
    )

}