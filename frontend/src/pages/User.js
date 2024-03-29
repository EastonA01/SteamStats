import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { API_RAW } from "../constants";

export default function User() {
    const [user, setUser] = useState([])
    const [steamID, setSteamID] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setSteamID(location?.state?.id)
    }, [location])
    useEffect(() => {
        getUser()
    }, [steamID])

    function getUser() {
        axios.get(API_RAW + `user/${steamID}/`)
            .then(res => {
                const userArr = res.data.response.players
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
                            } else {
                                tempCols.push(<td>{val}</td>)
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
            <button onClick={() => getUser()}>GO!!!!</button>
            <table>
                {user}
            </table>
        </div>
    )

}