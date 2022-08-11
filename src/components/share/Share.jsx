import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import {Label,Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img  className="shareProfileImg" src="/asset/download.jpg" alt="" />
                    <input placeholder="What's in your mind Thai" className="shareInput"  />
                </div>
                <hr className="shareHr"/>
                <div className="shareButtom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText" >Video or Photo</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText" >Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="" className="shareIcon"/>
                            <span className="shareOptionText" >Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="yellow" className="shareIcon"/>
                            <span className="shareOptionText" >Emoji</span>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}