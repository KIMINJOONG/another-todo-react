import React, { Component } from 'react';

class Clock extends Component {

    render() {
        const {hour, min, sec } = this.props
        console.log(hour);
        return(
            <div className="js-clock">
                <h1 className="js-title">{hour}:{min}:{sec}</h1>
            </div>
        );
    }
}

export default Clock;