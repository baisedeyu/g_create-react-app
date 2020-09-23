import React, { Component } from 'react';


class ErrorPage extends Component {
  state = {
    count: 1
  }
  getError = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
  render() {
    const { count } = this.state
    if (count === 5) {
      throw new Error('按到5 发生错误了')
    }
    return (
      <div>
        <button onClick={this.getError}>发生错误按4次</button>
        <span>{count}</span>
      </div>
    );
  }
}

export default ErrorPage;