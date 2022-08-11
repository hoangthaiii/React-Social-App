import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Happy Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search here" className="SearchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Contract</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/asset/072ecd71e4d482e6b3a1ba1d9b5f7d30.jpg" alt="" className="topbarImg" />
                <div className="darkMode">

                    <span className="dark">☽</span>
                    <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                    </label>
                    <span className="light">☀︎</span>


                </div>
            </div>


        </div>
    )
}