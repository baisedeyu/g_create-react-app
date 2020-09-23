import React, { Component } from 'react';

class Test3 extends Component {
  state = {  }
  render() { 
    console.log(this.props,'////////////////')
    return ( 
      <div>
        test3
      </div>
     );
  }
}
 
export default Test3;