import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRighTop">
                        <div className="profileCover">
                        <img 
                            className="profileCoverImg" 
                            src="/assets/post/3.jpg" 
                            alt="" />
                        <img 
                            className="profileUserImg" 
                            src="/assets/post/3.jpg" 
                            alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Rafatar Bol</h4>
                            <span className="profileInfoDesc">Hello My Friend</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
                
            </div>
        </>
  )
}
