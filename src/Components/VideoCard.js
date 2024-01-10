import React from "react";

const VideoCard = ({ info }) => {
    // console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="p-1 m-2 w-64 shadow-md">
            <img
                className="rounded-lg"
                src={thumbnails.medium.url}
                alt="video"
            />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li className="">{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
