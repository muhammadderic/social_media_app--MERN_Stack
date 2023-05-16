import "../styles/home.css";
// import Topbar from "../components/Topbar";
// import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        {/* <Sidebar /> */}
        <Feed />
      </div>
    </>
  )
}