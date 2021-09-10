import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Whatshot";
import WhatshotIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import HistoryIcon from "@material-ui/icons/History";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

function Sidebar() {
  return (
    <div className="Sidebar">
      {/* <h2>Sidebar</h2> */}

      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="LikedVideo" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
