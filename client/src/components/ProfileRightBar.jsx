import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileRightBar({ user }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("http://localhost:5000/api/v1/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFriends();
  }, [user]);

  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">
            {user.relationship === 1
              ? "Single"
              : user.relationship === 1
                ? "Married"
                : "-"}
          </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend) => (
          <Link
            to={"/profile/" + friend.username}
            style={{ textDecoration: "none" }}
          >
            <div className="rightbarFollowing">
              <img
                src="https://picsum.photos/500/200"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}