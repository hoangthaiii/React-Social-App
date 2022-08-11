import "./sidebar.css"
import {RssFeed, Chat} from "@mui/icons-material"
import WorkIcon from '@mui/icons-material/Work';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem"> 
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <OndemandVideoIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <HelpIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <WorkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <EmojiEventsIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem"> 
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more ...</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./asset/tim-hieu-ve-viem-tru-Rengoku-Kyoujurou.jpg" alt="" />
                        <span className="sidebarFriendName">Dinh Hoang Thai</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./asset/tim-hieu-ve-viem-tru-Rengoku-Kyoujurou.jpg" alt="" />
                        <span className="sidebarFriendName">Dinh Hoang Nam</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="./asset/tim-hieu-ve-viem-tru-Rengoku-Kyoujurou.jpg" alt="" />
                        <span className="sidebarFriendName">Dinh Hoang My</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}