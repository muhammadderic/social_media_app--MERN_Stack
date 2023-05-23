import { useState } from "react"

import Post from "./Post";
import Share from "./Share";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}