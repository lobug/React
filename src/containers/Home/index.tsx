import * as React from "react";
import { inject, observer } from "mobx-react";
import {Search} from "../../components/Search";

import { CounterStore } from "../../stores";
import { Todo } from "../../components/Todo";

const s = require("./style.scss");

interface IProps {
	counterStore: CounterStore;
}

interface ITodo {
	title: string;
	isFinished: boolean;
}

interface IState {
	todoList: ITodo[];
}

@inject("counterStore")
@observer
export class Home extends React.Component<IProps, IState> {
	public state = {
		todoList: [],
	};

	public createTodo = (todoName:string) => {
		let newTodoList = this.state.todoList;
		newTodoList.push({title: todoName, isFinished: false});

		this.setState({todoList: newTodoList});
		
	}
	public toggleTodo = (idTodo:number) => {
		let newTodoList = this.state.todoList;
		newTodoList[idTodo] = {
			...newTodoList[idTodo],
			isFinished : !newTodoList[idTodo].isFinished
		};

		this.setState({todoList: newTodoList})
	}
	public removeTodo = (idTodo:number) => {
		let newTodoList = this.state.todoList;
		newTodoList[idTodo] = {
			remove: !newTodoList[idTodo].remove
			isFinished: !newTodoList[idTodo].isFinished
		};

		this.setState({todoList: newTodoList})
	}
 
	public render() {
		const toDoListElements = this.state.todoList.map((todo: ITodo, index: number )=> {
			return <Todo title={todo.title} id={index} isFinished={todo.isFinished} onToggle={this.toggleTodo} removeTodo={this.removeTodo}/>;
		});

		return (
			<div className={s.container}>
				<div className={s.home}>
					<h1>TO DO </h1>
					<Search onCreateTodo={this.createTodo}/>
					{toDoListElements}
				</div>
			</div>
		);
	}
}
