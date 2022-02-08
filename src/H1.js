import React from 'react';
import CountHOC from './CountHOC';
class H1 extends React.Component {
  render() {
    return (
      <div className="betterview">

        <h1>{this.props.cnt}</h1>
        <h1 onClick={this.props.inc}>Inc</h1>
        <h1 onClick={this.props.dec}>Dec</h1>
      </div>
    );
  }
}
export default CountHOC(H1,200);
