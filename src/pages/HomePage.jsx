import { useState } from "react";
import "../App.css";


import { getPosts } from "../api";  // Changed path to go up one level
import PostCard from "../components/PostCard";  // Changed path to go up one level
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const posts = await getPosts();
    setData(posts);
    setLoading(false);
  };

  return (
    <div className="App">
      <h2>Home Page</h2>
      <nav>
        <Link to="/posts">View Posts</Link>
      </nav>

      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>

      {data ? data.map((e, index) => <PostCard key={index} title={e.title} body={e.body} />) : <p>No data</p>}
    </div>
  );
}

export default HomePage;