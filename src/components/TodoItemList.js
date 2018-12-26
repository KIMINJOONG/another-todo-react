import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<TodoItem key={info.id} info={info} />)
        );
        return(    
            <div>
                {list}
            </div>
        );
    }
}
export default TodoItemList;