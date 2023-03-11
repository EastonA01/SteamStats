import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";
import moment from 'moment'

export default function Friend() {
    const [friend, setFriend] = useState([])

    useEffect(() => {
        getFriend()
    }, [])

    function getFriend() {
        axios.get(API_RAW + "friends/76561198152156381/")
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