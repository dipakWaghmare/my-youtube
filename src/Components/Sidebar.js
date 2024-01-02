import React from "react";
import { useSelector } from "react-redux";
// import store from "../utils/store";

const Sidebar = () => {
    const isMenuOPen = useSelector((store) => store.app.isMenuOPen);

    if (!isMenuOPen) return null;

    return (
        <div className="p-5 w-48 shadow-lg">
            <ul className="">
                <li>Home</li>
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
