import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";

export default function Friend() {
    const [friend, setFriend] = useState([])

    useEffect(() => {
        getFriend()
    }, [])

    function getFriend() {
        axios.get(API_RAW + "friends/76561198152156381/").then(res => setFriend(res.data));
    }



    return (
        <div className="App">
            <h3>{JSON.stringify(friend)}</h3>
        </div>
    )

}