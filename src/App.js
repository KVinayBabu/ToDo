import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    text: '',
    todolist: [],
    disabled: true,
    }
    
    AddText = (e) => {
    this.setState({
    text: e.target.value,
    })
    }
    
    Add = () => {
    if (this.state.text) {
    this.setState(prevState => ({
    todolist: prevState.todolist.concat(prevState.text),
    text:''
    }));
    }
    }
    
    onDelete = (index) => {
    this.state.todolist.splice(index, 1);
    this.setState(prevState => ({
    todolist: prevState.todolist
    }));
    }
    
  render(){
    return (
      <div className="todo">
        <h1>To Do List</h1>
        <input type="text" value={this.state.text} onChange={this.AddText} disabled={!this.state.disabled} />
        <button class="add" placeholder="Enter text" onClick={this.Add}>
          Add
        </button>
        <ol>
          {
            this.state.todolist.filter(item => item.includes(this.state.text)).map((item, index) => {
              return (
                <li key={index} >
                  <span>{item}​​​​​​​​</span>
                  <button class="delete" onClick={() => this.onDelete(index)}>
                    Delete
                  </button>
                </li>
              )
            })
          }
        </ol>

      </div >
    )
  }
}

export default App;
