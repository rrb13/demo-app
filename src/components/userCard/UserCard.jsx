import "./userCard.css"
import { MoreVert } from "@mui/icons-material"
import { Users, Posts } from "../../dummyData"
import ListPhoto from "../listPhoto/ListPhoto"


export default function UserCard ({post}) {

  return (
    <div className="post" >
        
        <div className="cardWrapper">
            <div className="postTop">
                <img 
                className="UserImg" 
                src="/assets/person/3.jpg" 
                alt="" />
            </div>
            <div className="postCenter1">
                <h4 className="postText">Karin Beth</h4>
            </div>
            <div className="postCenter2">
                {Posts.map((u) => (
                 <ListPhoto key={u.id} entry={u} />
                ))}
            </div>
            <div className="postBottom">
                <h4 className="textDetails">Show more details</h4>
            </div>
        </div>
    </div>
  )
}
