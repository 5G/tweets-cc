import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John Doe{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Lorem ipsum otter sit</p>
          </div>
        </div>
        <img
          src="https://media2.giphy.com/media/QcIhKTnPVZu48/giphy.gif?cid=ecf05e472js32ewnnzvj68ebp99no2390xhjs3zarl61987d&rid=giphy.gif"
          alt="otter gif"
        />
      </div>
    </div>
  );
}

export default Post;
