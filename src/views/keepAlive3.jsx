import React, { Component } from 'react';
import { KeepAlive } from 'react-keep-alive'

class Keep3 extends Component {
  state = {}
  render() {
    return (
      <KeepAlive name="keep3">
        <div>
          <input type="text" />
          <br />
          <button onClick={() => this.props.history.push('/keep1')}>gokeep1</button>
        </div>
      </KeepAlive>
    );
  }
}

export default Keep3;