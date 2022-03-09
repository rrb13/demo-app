import "./homepage.css"
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Homepage() {
  return (
    <>
            <Header/>
            <div className="profile">

                {/* <div className="homeCover">
                    <button className='mb-4 bg-gradient-to-r from-yellow-500 to-black text-white text-2xl px-4 py-2 '>Upload foto </button>
                    <p> Photos uploaded by photographers you follow are added to your feed.</p>
                    <p>Remember your photos will appear in your followers’ feeds too. A great way to get your work out there.</p>
                </div> */}
                <div className="homeFeedSidebar">
                    <Feed/>
                    <Rightbar profile/>
                </div>
                
                
            </div>
        </>
  )
}
