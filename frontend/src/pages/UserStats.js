import axios from "axios";
import React, { useState } from "react";
import moment from "moment";


import { API_RAW, minutesToHHmm } from "../constants";


export default function UserStats() {
    const [user, setUser] = useState([])
    const [steamID, setSteamID] = useState("")
    const [gameID, setGameID] = useState("")

    function getUserStatsGames() {
        axios.get(API_RAW + `user_stats/${steamID}/${gameID}/`)
            .then(res => {
                const userArr = res.data.playerstats.achievements
                let tempList = []
                const keys = Object.keys(userArr[0])
                console.table(keys)
                //CREATE THE HEADERS
                keys.forEach(key => {
                    tempList.push(<th>{key}</th>)
                })
                //CREATE THE ROWS
                userArr.forEach(
                    i => {
                        let tempCols = []
                        Object.entries(i).forEach(([key, val]) => {
                            if (key === "communityvisibilitystate") {
                                tempCols.push(<td>{val + ""}</td>)
                            } else if (key.includes('avatar') && key !== 'avatarhash') {
                                tempCols.push(<td><img src={i[key]} /></td>)
                            } else if (key.includes('lastlogoff', 'timecreated')) {
                                tempCols.push(<td>{moment.unix(i.timecreated).format('MMMM Do YYYY, h:mm:ss a')}</td>)
                            }
                            else {
                                tempCols.push(<td>{val == 1 ? "✅" : val == 0 ? "❌" : val}</td>)
                            }
                        })
                        tempList.push(<tr>{tempCols}</tr>)
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
            <label>Enter your GameID:
                <input
                    type="text"
                    value={gameID}
                    onChange={(e) => setGameID(e.target.value)}
                />
            </label>
            <button onClick={() => getUserStatsGames()}>GO!!!!</button>

            <table>
                {user}
            </table>

        </div>
    )

}