import React, { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Java Script", body: "Description 1"},
    {id: 2, title: "Java", body: "Description 2"},
    {id: 3, title: "Go", body: "Description 3"}
  ]);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;