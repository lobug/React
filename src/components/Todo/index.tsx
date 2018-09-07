import * as React from "react";

interface Iprops {
  title: string;
  id: number;  
  isFinished: boolean;
  // removed: number;
  onToggle: (idTodo: number) => void;
  removeTodo: (idTodo: number) => void;
}

export class Todo extends React.Component<Iprops, {}> {
  public render() {
    const todoTitle = this.props.isFinished ? (
      <s>
        <p>{this.props.title}</p>
      </s>
    ) : (
      <p>{this.props.title}</p>
    );

    return (
      <div style={{ display: "flex", width: "100%" }}>
        <input
          type="checkbox"
          checked={this.props.isFinished}
          onChange={() => {
            this.props.onToggle(this.props.id);
          }}
        />
        {todoTitle}
        <button
          onClick={() => {
            this.props.removeTodo(this.props.id);
          }}
          style={{ width: "10%", height: "30px", marginTop: "15px", marginLeft: "10px"}}
        ><p  style={{ marginLeft:" -6px", marginTop:"3px"}}>Apagar</p>
        </button>
      </div>
    );
  }
}
