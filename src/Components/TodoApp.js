import React , {Component} from 'react';
import './TodoApp.css'

class TodoApp extends Component {
    state = {
        todos : [
            {name : "First Task"},
            {name : "Second Task"}
        ],
        taskName : ''
    }
    handleInputChange = (e) => {
        this.setState({
            todoName : e.target.value
        })
    }
    addTask = () => {
        let todos = this.state.todos;
        todos.push({
            name : this.state.todoName
        })
        this.setState({
            todoName : '',
            todos,
        })
    }
    removeTask = (index) => {
        let todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div class="todoList">
                <div class="cover-inner">
                    <h3>Todo list by React</h3>
                </div>
                <div class="content">
                    <form class="add">
                        <input 
                            type="text"
                            name="add"
                            id="add-task"
                            onChange = {this.handleInputChange}
                            value={this.state.todoName}
                        />
                        <label htmlFor="add-task">Add task...</label>
                        <div class="input-buttons">
                            <a href="#" class="add-todo">
                                <span onClick={this.addTask} class="fas fa-plus add">add</span>
                            </a>
                        </div>
                    </form>
                    <ul class="todos">
                        {this.state.todos.map((todo , index) => {
                            return (
                                <li key={index}>
                                    <input type="checkbox" id={index} />
                                    <label htmlFor={index}>
                                        <span class="check"></span>{todo.name}
                                    </label>
                                    <i onClick={() => this.removeTask(index)} class="far fa-trash-alt delete">delete</i>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoApp;