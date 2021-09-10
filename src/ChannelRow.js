import React from 'react'
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core"
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined"

function ChannelRow({image, channel, subs, noOfVideos, description, verified}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow_text">
                <h4>{channel} {verified && < CheckCircleOutlinedIcon /> }</h4>
                <p>{subs} subscribers . {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
