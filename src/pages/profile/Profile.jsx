import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/topbar"
import "./profile.css"


export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="asset/bg1.jpg" alt="" className="profileCoverImg" />
              <img src="asset/thuonghuyennhat.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Đinh Hoàng Thái</h4>
                <span className="profileInfoDesc" >flo insta: __thaine__</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed />
          <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
