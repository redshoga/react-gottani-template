import { Action } from "redux";

// action types
export const FETCH_POSTS = "FETCH_POSTS";
export const SET_POSTS = "SET_POSTS";
export const POSTS_FETCH_FAILED = "POSTS_FETCH_FAILED";

interface FetchPostsAction extends Action {
  type: typeof FETCH_POSTS;
}

interface SetPostsAction extends Action {
  type: typeof SET_POSTS;
  payload: Post[];
}

interface PostsFetchFailedAction extends Action {
  type: typeof POSTS_FETCH_FAILED;
}

export type ActionTypes =
  | FetchPostsAction
  | SetPostsAction
  | PostsFetchFailedAction;

// action creator
const fetchPosts: () => ActionTypes = () => {
  return { type: FETCH_POSTS };
};
const setPosts: (posts: Post[]) => ActionTypes = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  };
};
const postsFetchFailed: () => ActionTypes = () => {
  return { type: POSTS_FETCH_FAILED };
};

export const actionCreator = {
  fetchPosts,
  setPosts,
  postsFetchFailed
};

// state
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
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
    case FETCH_POSTS:
      return {
        ...state,
        loadingPosts: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        fetchFailed: false,
        loadingPosts: false
      };
    case POSTS_FETCH_FAILED:
      return {
        ...state,
        fetchFailed: true
      };
    default:
      return state;
  }
}
