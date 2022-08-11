import React, { useState } from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData"


export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const likeHandler =() => {
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLike)
  }


  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === post?.userid)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className='postUserName'>
                        {Users.filter((u)=>u.id === post.userid)[0].username}
                    </span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postButtom">
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/asset/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/asset/haha.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/asset/cry.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/asset/angry.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
