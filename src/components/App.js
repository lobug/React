import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lobug Like List</h1>
        <Post title="Minha Família :3" />
        <Post title="Chocolate ;)" />
        <Post title="Aprender a Programar </>" />
      </div>
    );
  }
}
