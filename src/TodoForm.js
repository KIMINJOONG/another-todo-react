import React, { Component } from 'react';

class TodoInput extends Component {
    render(){
        return(
            <div>
                <form className="js-form form">
                <div>
                    <input 
                        type="text" 
                        placeholder="what is your name?" 
                        name="name"    
                    />
                </div>
                    <input
                        type="text"
                        placeholder="Write a to do"
                        name="toDo"
                    />
                <div>

                </div>
                </form>
            </div>
        );
    }
}

export default TodoInput;