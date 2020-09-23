import React, { Component } from 'react';
import zh_CN from '../local/zh'
import en_US from '../local/en'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'


class Language extends Component {
  state = {}

  handleMessages = lang => {
    let res = null
    switch (lang) {
      case "zh-CN":
        res = zh_CN
        break;
      case "en-US":
        res = en_US
        break
      default:
        res = zh_CN
        break;
    }
    return res
  }

  render() {
    console.log(navigator.language)
    return (
      <>
        {/* locale 当前语言环境  navigator.language  */}
        <IntlProvider locale="zh-CN" messages={this.handleMessages(this.props.language)}>
          {this.props.children}
        </IntlProvider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Language);