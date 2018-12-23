import React, { Component } from 'react';

class Clock extends Component {

    render() {
        const {hour, min, sec } = this.props
        console.log(hour);
        return(
            <div className="js-clock">
                <h1 className="js-title">
                    {hour < 10 ? '0'+hour : hour}
                    :{min < 10 ? '0'+min : min}
                    :{sec < 10 ? '0'+sec : sec}
                </h1>
            </div>
        );
    }
}

export default Clock;