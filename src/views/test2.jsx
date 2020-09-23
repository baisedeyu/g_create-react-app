import React, { Component } from 'react';


class Test2 extends Component {
  state = {}
  render() {
    return (
      <div>
        Test2
        {this.props.children}
      </div>
    );
  }
}

export default Test2;