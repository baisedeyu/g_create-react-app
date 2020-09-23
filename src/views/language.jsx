import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { changeLanguage } from '../action/language'


class Language extends Component {
  state = {}

  change = (val) => {
    this.props.changeLanguage(val)
  }

  render() {
    return (
      <div>
        <FormattedMessage id="hello" />
        <br />
        <button onClick={() => this.change('zh-CN')}>中文</button>
        <br />
        <button onClick={() => this.change('en-US')}>英文</button>
        <br/>
        <button onClick={()=>this.props.history.push('/DynamicPage')}>goDynamic</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps, { changeLanguage })(Language);