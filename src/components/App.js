import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      newPostText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      posts: [...this.state.posts, { title: this.state.newPostsText }],
      newPostText: ""
    });
  }

  handleTextChange(e) {
    this.setState({ newPostsText: e.target.value });
  }

  render() {

    const posts = this.state.posts.map((post, index) => {
      return <Post key={index}>{post.title}</Post>;
    })

    return (
      <div>
        <h1>Lobug Like List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newPostsText}
            onChange={this.handleTextChange}
          />
          <button type="submit">Postar</button>
        </form>

        {posts}
      </div>
    );
  }
}
