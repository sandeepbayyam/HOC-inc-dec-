import React from 'react';

export default function CountHOC(OldComponent, initialValue) {
  console.log(initialValue);
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: initialValue,
      };
    }
    inc = () => {
      this.setState({ count: this.state.count + 1 });
    };
    dec = () => {
      this.setState({ count: this.state.count - 1 });
    };
    render() {
      return <OldComponent cnt={this.state.count} inc={this.inc} dec={this.dec} />;
    }
  }
  return NewComponent;
}
