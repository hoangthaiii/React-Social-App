import "./rightbar.css"
import React from "react"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
   const HomeRightbar = () => {
       return (
           <>
           <div className="birthdayContainer">
                <img src="/asset/Gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <b>Mỹ Hạnh</b> and <b>2 orther friends</b> have a birthday today 
                </span>
                </div>
                <img src="/asset/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Friends online</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}  /> 
                    ))}
                </ul>
           </>
       )
   }
   const ProfileRightbar = () => {
       return (
           <>
           <h4 className="rightbarTitle">User Information</h4>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">TPHCM</span>
               </div>
               <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">TPHCM</span>
               </div>
               <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">TPHCM</span>
               </div>
           </div>
           <h4 className="rightbarTitle">User Friends</h4>
           <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                   <img src="asset/user1.jpg" alt="" className="rightbarFollowingImg" />
                   <span className="rightbarFollowingName">Nguyen Nhat Vy</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="asset/user1.jpg" alt="" className="rightbarFollowingImg" />
                   <span className="rightbarFollowingName">Nguyen Nhat Vy</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="asset/user1.jpg" alt="" className="rightbarFollowingImg" />
                   <span className="rightbarFollowingName">Nguyen Nhat Vy</span>
               </div>
           </div>
           </>
       )
   }
    return (
        <div className="rightbar">
            <div className="rightWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}