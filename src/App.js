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
      text: ''
    };
  }

  addTodo = () => {
    this.setState({
      list: this.state.groceries.map(item => {
        if (item.id === clickedItemId){
          return {
            ...item,
            name: ``,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
