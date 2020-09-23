import React, { Component } from 'react';

class KeepAlive2 extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <input type="text"/>
        <br/>
        <button onClick={()=>this.props.history.push('/keep3')}>gokeep2</button>
      </div>
    );
  }
}
 
export default KeepAlive2;