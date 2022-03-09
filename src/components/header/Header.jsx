import "./header.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Header(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/logo.png" alt="" className="logo" />
            </div>
            <div className="topbarCenter">
                
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Contest</span>
                    <span className="topbarLink">Gallery</span>
                </div>
                <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
            </div>
            
            
        </div>
    )
}