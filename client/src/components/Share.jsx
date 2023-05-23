import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext"

export default function Share() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(file)
  console.log(URL)

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="http://placekitten.com/50/50" alt="" className="shareTopProfileImg" />
          <input className="shareTopInput" type="text" placeholder={"What's in your mind, " + user.username} />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <div onClick={() => setFile(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="shareImgCancel icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M10 10l4 4m0 -4l-4 4"></path>
              </svg>
            </div>
          </div>
        )}
        <form className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-upload" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 11v6"></path>
                <path d="M9.5 13.5l2.5 -2.5l2.5 2.5"></path>
              </svg>
              <span className="shareOptionText">Photo or Video</span>
              <input type="file" id="file" accept=".png,.jpeg,.jpg" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="8.5" cy="8.5" r="1" fill="currentColor"></circle>
                <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z"></path>
              </svg>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20.985 12.528a9 9 0 1 0 -8.45 8.456"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M9 10h.01"></path>
                <path d="M15 10h.01"></path>
                <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1"></path>
              </svg>
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  )
}