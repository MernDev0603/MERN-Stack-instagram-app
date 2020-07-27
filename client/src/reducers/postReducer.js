import {
  GET_POST,
  POST_LOADING,
  GET_USER_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  userPosts: [],
  loadingPost: false
};

export default function (state=initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loadingPost: true,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loadingPost: false,
      };
    case POST_LOADING:
      return {
        ...state,
        loadingPost: true,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loadingPost: false,
      };
    // case GET_OTHER_USERS_POSTS:
    //   return {
    //     ...state,
    //     othersUserPosts: action.payload,
    //     loadingPost: false,
      // };
    default:
      return state;
  }
}