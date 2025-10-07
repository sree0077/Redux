import { createContext, useReducer } from "react";

const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = () => {};
  //we can delete the duplicate values from value function if we need
  return (
    <PostList.Provider
      value={{ postlist: postlist, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [{
  id:'1',
  title:'going to varanasi',
  body:'my baba is calling me ,my heaven',
  reactions:2,
  userId:'user-3',
  tags:['spiritual','varanasi','bairav baba'],
},
{
  id:'2',
  title:'going to dakshinswar',
  body:'my maa is calling me ,my heaven',
  reactions:3,
  userId:'user-2',
  tags:['spiritual','dakshineswar','kalima'],
}]

export default PostListProvider;
