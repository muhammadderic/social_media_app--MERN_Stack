import "../styles/home.css";
// import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  )
}