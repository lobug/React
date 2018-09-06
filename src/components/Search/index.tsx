import * as React from "react";

interface Iprops{
  onCreateTodo: (todoName:string) => void;
}
interface IState{
  textValue: string;
}
// interface IChecked{
//   onChecked:(todoChecked: boolean) => true;
// }

export class Search extends React.Component<Iprops, IState, IChecked> {
  public state = {
    textValue: "",
  }
 

  private onSubmitTodo = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    this.props.onCreateTodo(this.state.textValue);
    this.setState({textValue:""});
  }

 
  public render() {
    return (
     <div style={{width: "100%"}}>
         <form onSubmit={this.onSubmitTodo}>
             <input 
                style={{width: "100%"}}
                type="text" 
                value={this.state.textValue} 
                onChange={ev => this.setState({textValue: ev.target.value}) }
             />
             <button style={{width: "100%"}} type="submit">Criar</button>
         </form>
    </div>);
  }
}
