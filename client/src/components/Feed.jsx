import { useState } from "react"

import Post from "./Post";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}