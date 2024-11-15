import React from "react";
import { COMMENTS_JSON } from "../utils/constants";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        )
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 border border-gray-200 bg-white">
      <span className="text-xl font-bold p-2"> Comments</span>
      <CommentList comments={COMMENTS_JSON} />
    </div>
  );
};

export default CommentsContainer;
