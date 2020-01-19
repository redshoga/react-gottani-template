import React from "react";
import { mapStateToProps, mapDispatchToProps } from "../../pages/PostsPage";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export class PostsViewer extends React.Component<Props> {
  render() {
    const { posts, loadingPosts, fetchFailed, fetchPosts } = this.props;
    return (
      <>
        <div>loading: {String(loadingPosts)}</div>
        <div>fetch failed: {String(fetchFailed)}</div>

        <button onClick={fetchPosts}>FETCH POSTS</button>

        <div>
          {posts.length === 0 && <>Posts is displayed here</>}
          {posts.map(post => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </div>
      </>
    );
  }
}
