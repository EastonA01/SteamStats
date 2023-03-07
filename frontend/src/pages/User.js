import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_RAW } from "../constants";

export default function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    function getUser() {
        axios.get(API_RAW + "user/76561198152156381/").then(res => setUser(res.data));
    }



    return (
        <div className="App">
            <h3>{JSON.stringify(user)}</h3>
        </div>
    )

}