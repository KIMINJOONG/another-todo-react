import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const { name, dos, id } = this.props;
        return(
            <div>
                <div id={id}>
                    { name } : {dos}
                </div>
            </div>
        );
    }
}
export default TodoItem;