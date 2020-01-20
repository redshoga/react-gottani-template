import reducerTester from "reducer-tester";
import { reducer, initialState, actionCreator } from "./Posts";
import { mockPosts } from "../constants/mocks";

describe("Counter", () => {
  reducerTester({
    reducer,
    state: initialState,
    tests: [
      actionCreator.fetchPosts(),
      actionCreator.postsFetchFailed(),
      actionCreator.setPosts(mockPosts)
    ]
  });
});
