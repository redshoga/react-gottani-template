import { connect } from "react-redux";
import { RootState, actionCreator } from "../modules";
import { Dispatch } from "react";
import { Action } from "redux";
import { PostsViewer } from "../components/PostsViewer/PostsViewer";

export const mapStateToProps = (rootState: RootState) => {
  return {
    posts: rootState.posts.posts,
    loadingPosts: rootState.posts.loadingPosts,
    fetchFailed: rootState.posts.fetchFailed
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchPosts: () => dispatch(actionCreator.posts.fetchPosts())
  };
};

export const PostsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsViewer);
