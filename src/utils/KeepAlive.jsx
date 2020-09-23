import React from 'react';
import { KeepAlive } from 'react-keep-alive'
import { connect } from 'react-redux'

const Keep = (props) => {
  const name=props.name
  return (
    <KeepAlive name={name}>
      {props.children}
    </KeepAlive>
  )
}

export default Keep