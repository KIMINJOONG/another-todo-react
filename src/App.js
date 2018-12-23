import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {

  constructor(props) {
    super(props)
    this.state ={date: new Date()}
  }

  componentDidMount() {
      this.timeID = setInterval(
          () => this.change(),
          1000
      )
  }

  componentWillUnmount(){
      clearInterval(this.timeID)
  }

  change = () => {
      this.setState({
          date: new Date()
      });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="container">
        <Clock 
          hour={date.getHours()}
          min={date.getMinutes()}
          sec={date.getSeconds()}
          />
      </div>
    );
  }
}

export default App;
