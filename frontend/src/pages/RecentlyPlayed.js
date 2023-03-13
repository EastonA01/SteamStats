import axios from "axios";
import React, { useState } from "react";


import { API_RAW, minutesToHHmm } from "../constants";


export default function RecentlyPlayed() {
    const [user, setUser] = useState([])
    const [steamID, setSteamID] = useState("")



    //useEffect(() => {
    //     getRecentlyPlayedGames()
    // }, [])

    function getRecentlyPlayedGames() {
        if (!steamID)
            return
        axios.get(API_RAW + `recentlyPlayed/${steamID}/`)
            .then(res => {
                const userArr = res.data.response.games
                let tempList = []
                //CREATE THE HEADERS
                Object.keys(userArr[0]).forEach(key => {
                    tempList.push(<th>{key}</th>)
                })
                //CREATE THE ROWS
                userArr.forEach(
                    i => {
                        tempList.push(<tr>
                            <td>{i.appid}</td>
                            <td>{i.name}</td>
                            <td>{minutesToHHmm(i.playtime_2weeks)}</td>
                            <td>{minutesToHHmm(i.playtime_forever)}</td>
                            <td><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${i.appid}/${i.img_icon_url}.jpg`} /></td>
                            <td>{minutesToHHmm(i.playtime_windows_forever)}</td>
                            <td>{minutesToHHmm(i.playtime_mac_forever)}</td>
                            <td>{minutesToHHmm(i.playtime_linux_forever)}</td>
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
                <button onClick={() => getRecentlyPlayedGames()}>GO!!!!</button>
            </label>
            <table>
                {user}
            </table>

        </div>
    )

}