import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { Post, actionCreator, FETCH_POSTS } from "./Posts";

const fetchPostsWithClient: () => Promise<Post[]> = async () => {
  const res = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.data;
};

const fetchPosts = function*() {
  try {
    const posts = yield call(fetchPostsWithClient);
    yield put(actionCreator.setPosts(posts));
  } catch (e) {
    yield put(actionCreator.postsFetchFailed());
  }
};

export const sagas = [takeEvery(FETCH_POSTS, fetchPosts)];
