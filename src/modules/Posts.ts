import { Action } from "redux";
import { Post } from "../models/Post";

// action types
export const ActionTypeName = {
  FETCH_POSTS: "Posts/FETCH_POSTS",
  SET_POSTS: "Posts/SET_POSTS",
  POSTS_FETCH_FAILED: "Posts/POSTS_FETCH_FAILED"
};

interface FetchPostsAction extends Action {
  type: typeof ActionTypeName.FETCH_POSTS;
}

interface SetPostsAction extends Action {
  type: typeof ActionTypeName.SET_POSTS;
  payload: Post[];
}

interface PostsFetchFailedAction extends Action {
  type: typeof ActionTypeName.POSTS_FETCH_FAILED;
}

export type ActionTypes =
  | FetchPostsAction
  | SetPostsAction
  | PostsFetchFailedAction;

// action creator
const fetchPosts: () => ActionTypes = () => {
  return { type: ActionTypeName.FETCH_POSTS };
};
const setPosts: (posts: Post[]) => ActionTypes = posts => {
  return {
    type: ActionTypeName.SET_POSTS,
    payload: posts
  };
};
const postsFetchFailed: () => ActionTypes = () => {
  return { type: ActionTypeName.POSTS_FETCH_FAILED };
};

export const actionCreator = {
  fetchPosts,
  setPosts,
  postsFetchFailed
};

// state
export interface State {
  posts: Post[];
  loadingPosts: boolean;
  fetchFailed: boolean;
}
export const initialState: State = {
  posts: [],
  loadingPosts: false,
  fetchFailed: false
};

// reducer
export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ActionTypeName.FETCH_POSTS:
      return {
        ...state,
        loadingPosts: true
      };
    case ActionTypeName.SET_POSTS:
      return {
        ...state,
        posts: (action as SetPostsAction).payload,
        fetchFailed: false,
        loadingPosts: false
      };
    case ActionTypeName.POSTS_FETCH_FAILED:
      return {
        ...state,
        fetchFailed: true
      };
    default:
      return state;
  }
}
