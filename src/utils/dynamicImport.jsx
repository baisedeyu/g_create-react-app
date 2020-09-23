import React, { Component } from 'react';

function asyncComponent(importComponent) {
  class Async extends Component {
    state = {
      component: null
    }

    async componentDidMount(){
      const component=await importComponent()
      this.setState({
        component:component.default
      })
    }

    render() {
      const Component=this.state.component
      return ( 
        Component? <Component />:<div>loading123</div>
      );
    }
  }
  return Async
}

export default asyncComponent