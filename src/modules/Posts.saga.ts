import { call, put, takeEvery } from "redux-saga/effects";
import { actionCreator, ActionTypeName } from "./Posts";
import { Post } from "../models/Post";

// import axios from "axios";

import aspida from "@aspida/axios";
import api from "../apis/$api";

const client = api(aspida());

const fetchPostsWithClient: () => Promise<Post[]> = async () => {
  // // Normal axios
  // const res = await axios.get<Post[]>(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );
  // return res.data;

  // Axios with aspida
  // more details: https://github.com/aspidajs/aspida
  return client.posts.$get();
};

const fetchPosts = function*() {
  try {
    const posts = yield call(fetchPostsWithClient);
    yield put(actionCreator.setPosts(posts));
  } catch (e) {
    yield put(actionCreator.postsFetchFailed());
  }
};

export const sagas = [takeEvery(ActionTypeName.FETCH_POSTS, fetchPosts)];
