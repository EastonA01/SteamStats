import axios from "axios";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { API_RAW, minutesToHHmm } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";


export default function OwnedGames() {
    const [ownedList, setOwnedList] = useState([])
    const [steamID, setSteamID] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setSteamID(location?.state?.id)
    }, [location])
    useEffect(() => {
        getOwnedGames()
    }, [steamID])

    function getOwnedGames() {
        if (!steamID)
            return
        axios.get(API_RAW + `ownedGames/${steamID}/`)
            .then(res => {
                //sort part not needed, being extra
                const gamesArr = res.data.response.games.sort((a, b) => { return b.playtime_forever - a.playtime_forever })
                let tempList = []
                //CREATE THE HEADERS
                const headers = Object.keys(gamesArr[0])
                headers.forEach(key => {
                    tempList.push(<th>{key}</th>)
                })
                //CREATE THE ROWS
                const has_recents = headers.includes('playtime_2weeks')
                const has_com_guidelines = headers.includes('has_community_visible_stats')
                gamesArr.forEach(
                    i => {
                        tempList.push(<tr>
                            <td>{i.appid}</td>
                            <td>{i.name}</td>
                            {has_recents ? <td>{minutesToHHmm(i.playtime_2weeks)}</td> : null}
                            <td>{minutesToHHmm(i.playtime_forever)}</td>
                            <td><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${i.appid}/${i.img_icon_url}.jpg`} /></td>
                            {has_com_guidelines ? <td>{i.has_community_visible_stats + ""}</td> : null}
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
                    className="inputBox"
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