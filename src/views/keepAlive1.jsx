import React, { Component } from 'react';

class KeepAlive1 extends Component {
  state = {}
  render() {
    return (
      <div>
        <input type="text" />
        <br />
        <button onClick={()=>this.props.history.push('/keep2')}>gokeep 2</button>
      </div>
    );
  }
}

export default KeepAlive1;