import Online from "./Online";
import { Users } from "../dummyData";

export default function HomeRightBar() {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="http://placekitten.com/40/40" alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}