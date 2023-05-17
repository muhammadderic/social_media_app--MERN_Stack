import "../styles/profile.css";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://picsum.photos/500/200"
                alt="profile"
              />
              <img
                className="profileUserImg"
                src="http://placekitten.com/150/150"
                alt="profile2"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">username</h4>
              <span className="profileInfoDesc">this is a description</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="username" />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  )
}