import React from 'react';
import ReactDOM from 'react-dom';
import './clock.css'

class Clock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
    return (
      <div className = 'clock'>
        <h1>Hello, World!</h1>
        <h2>Current time is {this.state.date.toLocaleTimeString()}!</h2>
      </div>
    );
  }

}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

export default tick;


