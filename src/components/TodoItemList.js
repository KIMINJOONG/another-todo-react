import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        return(
            
            <div>
                <TodoItem 
                    id="1"
                    name="안녕"
                    dos="할 일"
                />
            </div>
        );
    }
}
export default TodoItemList;