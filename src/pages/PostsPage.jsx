import { useState, useEffect } from "react";
import "../App.css";

import { getPosts } from "../api";  
import PostCard from "../components/PostCard";  
import { Link } from "react-router-dom";

function PostsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      <h2>Posts Page</h2>
      <nav>
        <Link to="/">← Back to Home</Link>
      </nav>

      {data ? data.map((e, index) => <PostCard key={index} title={e.title} body={e.body} />) : <p>Loading...</p>}
    </div>
  );
}

export default PostsPage;