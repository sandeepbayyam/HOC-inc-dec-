import React from 'react';
import CountHOC from './CountHOC';
class Button extends React.Component {
  render() {
    return (
      <div className="betterview">
        <h1>{this.props.cnt}</h1>
        <button onClick={this.props.inc}>increment</button>
        <button onClick={this.props.dec}>decrement</button>
      </div>
    );
  }
}
export default CountHOC(Button, 300);
