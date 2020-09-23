import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoginAction } from '../action/user'

class Test1 extends Component {
  state = {}
  handleClick = () => {
    this.props.LoginAction('aaa')
  }
  render() {
    console.log(this.props)
    return (
      <div>
        Test1
        <br />
        <button onClick={this.handleClick}>
          修改
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{LoginAction})(Test1);