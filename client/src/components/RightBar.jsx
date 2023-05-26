import HomeRightBar from "./HomeRightBar"
import ProfileRightBar from "./ProfileRightBar"

export default function RightBar({ user }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar user={user} /> : <HomeRightBar />}
      </div>
    </div>
  )
}