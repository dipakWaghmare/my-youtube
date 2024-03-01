import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import store from "../utils/store";

const Sidebar = () => {
    const x = useSelector((store) => store.app.isMenuOPen);

    if (!x) return null;

    return (
        <div className="p-5 w-36 shadow-lg">
            <ul className="">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>

            <h1 className="pt-5 font-bold">You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Watch Later</li>
                <li>Your Videos</li>
            </ul>

            <h1 className="pt-5 font-bold">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
            </ul>
        </div>
    );
};

export default Sidebar;
