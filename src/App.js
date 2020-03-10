import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list,
      task: ''
    };
  }

  toggleCompleted = clickedItemId => {
    this.setState({
      list: this.state.list.map(item => {
          return {
            ...item,
            completed: !item.completed
          };
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
          <TodoList 
            list={this.state.list}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
