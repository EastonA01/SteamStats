import axios from "axios";
import moment from 'moment';
import React, { useState } from "react";
import { API_RAW, minutesToHHmm } from "../constants";


export default function OwnedGames() {
    const [ownedList, setOwnedList] = useState([])
    const [steamID, setSteamID] = useState("");

    function getOwnedGames() {
        if (!steamID)
            return
        axios.get(API_RAW + `ownedGames/${steamID}/`)
            .then(res => {
                //sort part not needed, being extra
                const gamesArr = res.data.response.games.sort((a, b) => { return b.playtime_forever - a.playtime_forever })
                let tempList = []
                //CREATE THE HEADERS
                Object.keys(gamesArr[0]).forEach(key => {
                    tempList.push(<th>{key}</th>)
                })
                //CREATE THE ROWS
                gamesArr.forEach(
                    i => {
                        tempList.push(<tr>
                            <td>{i.appid}</td>
                            <td>{i.name}</td>
                            <td>{minutesToHHmm(i.playtime_2weeks)}</td>
                            <td>{minutesToHHmm(i.playtime_forever)}</td>
                            <td><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${i.appid}/${i.img_icon_url}.jpg`} /></td>
                            <td>{i.has_community_visible_stats + ""}</td>
                            <td>{minutesToHHmm(i.playtime_windows_forever)}</td>
                            <td>{minutesToHHmm(i.playtime_mac_forever)}</td>
                            <td>{minutesToHHmm(i.playtime_linux_forever)}</td>
                            <td>{moment.unix(i.rtime_last_played).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        </tr>)
                    }
                )
                setOwnedList(tempList)
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
            <table>{ownedList}</table>
        </div>
    )

}