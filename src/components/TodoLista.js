import React from "react";
import { Component } from "react";
import Lista from "./Lista";
import "./TodoLista.css";
export default class TodoLista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorInserido: "", //term
      itensInseridos: [] //items
    };
  }

  onChange = event => {
    this.setState({ valorInserido: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      valorInserido: "",
      itensInseridos: [...this.state.itensInseridos, this.state.valorInserido]
    });
  };

  render() {
    return (
      <div>
        <h1>Lobug ToDo</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.valorInserido} onChange={this.onChange} />
          <button>Salvar</button>
        </form>
        <Lista itensInseridos={this.state.itensInseridos} />
      </div>
    );
  }
}
