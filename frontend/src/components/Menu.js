import React from "react";
import {
    Link
} from "react-router-dom";

export default function Menu(props) {
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="menu">
            <h1 className="title">SteamStats</h1>
            <button><Link to="/">Home</Link></button>
            <button><Link to="recently_played">Recently Played</Link></button>
            <button><Link to="user_stats">User Stats</Link></button>
            <button><Link to="owned">Owned Games</Link></button>
            <button><Link to="friend">Friends</Link></button>
            <button><Link to="hub">Hub</Link></button>
            <button><Link to="user">User</Link></button>
        </div>

    )
}

