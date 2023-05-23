import { useEffect } from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

import Post from "./Post";
import Share from "./Share";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/posts/timeline/" + user._id);
      console.log("res: ", res);
      setPosts(
        res.data.sort((post1, post2) => {
          return new Date(post1.createdAt) - new Date(post2.createdAt);
        })
      )
    }
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}