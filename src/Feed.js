import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={
              post.text
            } /* Update to use Firebase documentID in production */
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        {/* Default post in case of firebase error */}
        <Post
          displayName="John Doe"
          username="jdoe"
          verified
          text="Lorem ipsum otter sit"
          image="https://media2.giphy.com/media/QcIhKTnPVZu48/giphy.gif"
        />
      </FlipMove>
    </div>
  );
}

export default Feed;
