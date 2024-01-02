import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-1 m-1 shadow-lg items-center">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-12 mx-1 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnQGMz8OvAXcA8O68KY26wdbnq0nk0rD4Aw"
                    alt="Menu"
                />
                <a href="/">
                    <img
                        className="h-14 mx-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgJklOSHHDTpt6zdsMP1HOwi5JGZ3SmDI1A"
                        alt="Logo"
                    />
                </a>
            </div>
            <div className="px-52 col-span-10 items-center">
                <input
                    className="w-2/3 py-1 px-4 border border-r-0 border-gray-700 rounded-l-full"
                    type="text"
                />
                <button className="px-3 py-1 border border-gray-700 rounded-r-full bg-gray-100">
                    Search
                </button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA"
                    alt="User"
                />
            </div>
        </div>
    );
};

export default Head;
