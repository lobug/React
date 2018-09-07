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

	// FUNÇÃO PARA CRIAR OS ELEMENTOS DA TODOLIST
	public createTodo = (todoName:string) => {
		let newTodoList = this.state.todoList;
		newTodoList.push({title: todoName, isFinished: false});

		this.setState({todoList: newTodoList});
		
	}

	// FUNÇÃO QUE FAZ O CHECK NOS ITENS SELECIONADOS
	public toggleTodo = (idTodo:number) => {
		let newTodoList = this.state.todoList;
		newTodoList[idTodo] = {
			...newTodoList[idTodo],
			isFinished : !newTodoList[idTodo].isFinished
		};

		this.setState({todoList: newTodoList})
	}

	//FUNÇÃO PARA REMOVER O ELEMENTO DO TODO
	public removeTodo = (idTodo:number) => {
		let newTodoList = this.state.todoList;
		
		// USE _ QUANDO NÃO FOR USAR UMA O NOME DA PROPRIEDADE
		// FILTRO PARA REMOVER OS ITENS QUE FORAM APAGADOS
		newTodoList = newTodoList.filter((_value,index) => index != idTodo);
		
		// SETAR O VALOR DO NOVO TODO LIST NA LISTA QUE ESTA SENDO EXIBIDA
		this.setState({todoList: newTodoList})
	}
 
	public render() {
		const toDoListElements = this.state.todoList.map((todo: ITodo, index: number )=> {
			return <Todo title={todo.title} id={index} isFinished={todo.isFinished} onToggle={this.toggleTodo} removeTodo={this.removeTodo}/>;
		});

		return (
			<div className={s.container}>
				<div className={s.home}>
					<h1>Lista de Desejos / Metas 2018 </h1>
					<Search onCreateTodo={this.createTodo}/>
					{toDoListElements}
				</div>
			</div>
		);
	}
}
