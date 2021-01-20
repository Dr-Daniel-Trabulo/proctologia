import React from "react";
import { ThemeConsumer } from "styled-components";
import './teste.css'

class teste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            typingTodo: ""
        };
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({ typingTodo: value });
    };

    handleNewTask = (event) => {
        event.preventDefault();
        let toDo = this.state.todos.concat({ text: this.state.typingTodo, show: true })
        this.setState({ todos: toDo, typingTodo: '' });
    };

    handleClick = (event) => {
        let todos = this.state.todos
        let value = event.target.value
        let index = todos.findIndex(todo => todo.text === value)
        console.log(index)
        console.log(value)
        let showIndex = todos[index].show
        console.log(showIndex)
        showIndex === true ?
            todos[index].show = false
            :
            todos[index].show = true

        this.setState({ todos: todos })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={(event) => this.handleNewTask(event)}>
                    <input
                        type="text"
                        value={this.state.typingTodo}
                        name="typingTodo"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Create new task</button>
                </form>
                <form>
                    {
                        this.state.todos.length !== 0 &&
                        this.state.todos.map((todo) => {
                            return (
                                todo.show === true &&
                                <div >
                                    <input type='text' value={todo.text} onClick={event => this.handleClick(event)} />
                                </div>
                            )
                        })
                    }
                </form>
            </div >
        );
    }
}

export default teste;
