import { createContext, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload,...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POST_LIST);

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  //we can delete the duplicate values from value function if we need
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to varanasi",
    body: "my baba is calling me ,my heaven",
    reactions: 2,
    userId: "user-3",
    tags: ["spiritual", "varanasi", "bairav baba"],
  },
  {
    id: "2",
    title: "going to dakshinswar",
    body: "my maa is calling me ,my heaven",
    reactions: 3,
    userId: "user-2",
    tags: ["spiritual", "dakshineswar", "kalima"],
  },
];

export default PostListProvider;
