
import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW, minutesToHHmm } from "../constants";

import { useLocation, useNavigate } from "react-router-dom";
import OwnedGames from "./OwnedGames";

export default function Dashboard() {
    const [steamID, setSteamID] = useState("");
    const [user, setUser] = useState([])
    const [games, setGames] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [friend, setFriend] = useState([])
    const [ownedList, setOwnedList] = useState([])


    function userDashboard(temporaryVariable) {
        if (!temporaryVariable)
            temporaryVariable = steamID
        console.log("steamID", steamID)
        if (!steamID)
            return
        // USER PROFILE AXIOS CALL
        axios.get(API_RAW + `user/${steamID}/`)
            .then(res => {
                const userArr = res.data.response.players
                let tempList1 = []
                const keys = Object.keys(userArr[0])
                console.table(keys)
                //CREATE THE ROWS
                userArr.forEach(
                    i => {
                        tempList1.push(<div className="userProfile">
                            <img src={i.avatarfull} className="pfp"></img>
                            <div className="userInfo">
                                <h1>{i.personaname}</h1>
                                <h2>{i.realname}    {i.loccountrycode},{i.locstatecode}</h2>
                            </div>
                        </div>

                        )
                    }
                )
                setUser(tempList1)
            });
        // TODO Additional AXIOS CALL HERE For RECENTLY PLAYED
        axios.get(API_RAW + `recentlyPlayed/${steamID}/`)
            .then(res => {
                const gamesArr = res.data.response.games
                let tempList3 = []
                //CREATE THE ROWS
                gamesArr.forEach(
                    i => {
                        tempList3.push(
                            <tr>
                                <td><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${i.appid}/${i.img_icon_url}.jpg`} alt="game-icon" /></td>
                                <td>{i.name}</td>
                                <td>{minutesToHHmm(i.playtime_2weeks)}</td>
                                <td>{minutesToHHmm(i.playtime_forever)}</td>
                            </tr>
                        )
                    }
                )
                setGames(tempList3)
            });
        // TODO AXIOS CALL HERE FOR ALL GAMES
        axios.get(API_RAW + `ownedGames/${steamID}/`)
            .then(res => {
                //sort part not needed, being extra
                const gamesArr = res.data.response.games.sort((a, b) => { return b.playtime_forever - a.playtime_forever })
                let tempList4 = []
                //CREATE THE ROWS
                // const has_recents = headers.includes('playtime_2weeks')
                // const has_com_guidelines = headers.includes('has_community_visible_stats')
                for (let index = 0; index < 5; index++) {
                    const i = gamesArr[index];
                    tempList4.push(<tr>
                        <td>{i.name}</td>
                        <td><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${i.appid}/${i.img_icon_url}.jpg`} /></td>
                    </tr>)
                }
                setOwnedList(tempList4)
            });

        // Friends AXIOS Call
        axios.get(API_RAW + `friends/${steamID}/`)
            .then(res => {
                let tempList2 = []
                res.data.forEach(
                    i => {
                        tempList2.push(<tr>

                            <td><img src={i.avatar} alt="avatars" /></td>
                            <td>{i.personaname} <button onClick={() => { navigate("/user", { state: { id: i.steamid } }) }} className="goButton">User</button></td>
                        </tr>)
                    }
                )
                setFriend(tempList2)
            });
    }



    return (
        <div className="App">
            <h3>Welcome to 💨<span className="steamcolor">Steam Stats</span>💨 👍</h3>
            <label>Enter your SteamID:
                <input
                    type="text"
                    value={steamID}
                    onChange={(e) => setSteamID(e.target.value)}
                />
                <button onClick={() => userDashboard()}>GO!!!!</button>
            </label>
            {/* USER PROFILE */}
            <div className="profile">
                {user}
            </div>
            {/* RECENTLY PLAYED */}
            <div className="profile">
                <th></th>
                <th>Name</th>
                <th>Playtime 2 Weeks</th>
                <th>Playtime Forever</th>
                {games}
            </div>
            {/* ALL GAMES */}
            <div className="profile">
                <h1>All Games</h1>
                {ownedList}
                <button onClick={() => { navigate("/owned", { state: { id: steamID } }) }} className="goButton">See More</button>
            </div>
            {/* FRIENDS */}
            <div className="friendsTab">
                <table>
                    <th>User Navigation</th>
                    <th>Username</th>
                    {friend}
                </table>
            </div>
        </div>

    )
}