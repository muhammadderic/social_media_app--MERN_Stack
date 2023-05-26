import axios from "axios";
import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import "../styles/profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const username = useParams().username;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/api/v1/users?username=${username}`);
      setUser(res.data);
    }
    fetchData();
  }, [username]);

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
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}