import React from 'react';
import { Provider } from 'react-keep-alive'
import { connect } from 'react-redux'

const ProviderBox = (props) => {
  return (
    <Provider include={['keep1','keep2','keep3']}>
      {props.children}
    </Provider>
  )
}

export default ProviderBox