import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";

export default function User() {
    const [user, setUser] = useState([])
    const [steamID, setSteamID] = useState("")


    // useEffect(() => {
    //     getUser()
    // }, [])

    function getUser() {
        axios.get(API_RAW + `user/${steamID}/`)
            .then(res => {
                const userArr = res.data.response.players
                let tempList = []
                //CREATE THE HEADERS
                Object.keys(userArr[0]).forEach(key => {
                    tempList.push(<th>{key}</th>)
                })
                //CREATE THE ROWS
                userArr.forEach(
                    i => {
                        tempList.push(<tr>
                            <td>{i.steamid}</td>
                            <td>{i.has_communityvisibilitystate + ''}</td>
                            <td>{i.profilestate}</td>
                            <td>{i.personaname}</td>
                            <td>{i.profileurl}</td>
                            <td><img src={i.avatar} /></td>
                            <td><img src={i.avatarmedium} /></td>
                            <td><img src={i.avatarfull} /></td>
                            <td>{i.avatarhash}</td>
                            <td>{moment.unix(i.lastlogoff).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>{i.personastate}</td>
                            <td>{i.realname}</td>
                            <td>{i.primaryclanid}</td>
                            <td>{moment.unix(i.timecreated).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>{i.personastateflags}</td>
                            <td>{i.loccountrycode}</td>

                        </tr>)
                    }
                )
                setUser(tempList)
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
            </label>
            <button onClick={() => getUser()}>GO!!!!</button>
            <table>
                {user}
            </table>
        </div>
    )

}