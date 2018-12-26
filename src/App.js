import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 1
  state = {
    name: ''
    , dos: ''
    , information: [
      {
        id: 0
        , name: '김인중'
        , dos: '01077494452'
      }
    ]
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleCreate = () => {
    const { information, name, dos } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        name: name
        , dos : dos
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { name, dos, information } = this.state;
    const {
      handleChange
      , handleCreate
      , handleKeyPress
    } = this;
    return (
      <div>
        <TodoListTemplate 
          time="11:55:30" 
          form={
            <Form
              name={name}
              dos={dos}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          }
          children={<TodoItemList data={information} />}
          >
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
