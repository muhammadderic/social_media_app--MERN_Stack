import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Share() {
  const { user } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="http://placekitten.com/50/50" alt="" className="shareTopProfileImg" />
          <input className="shareTopInput" type="text" placeholder={"What's in your mind, " + user.username} />
        </div>
        <hr className="shareHr" />
      </div>
    </div>
  )
}