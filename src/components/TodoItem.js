import React, {Component} from 'react';

class TodoItem extends Component {
    static defaultProps = {
        info: {
            name: '김인중'
            , dos: '010-0000-0000'
            , id: 0
        }
    }
    render() {
        const { id, name, dos } = this.props.info;
        console.log({name});
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