import React, { Component } from 'react';



class ErrorBoundary extends Component {
  state = { 
    hasError:false
   }

   static getDerivedStateFromError(error){
     console.dir(error,'getDerivedStateFromError')
     return {
       hasError:true
     }
   }

   componentDidCatch(error,info){
     console.dir(error,info,'componentDidCatch')
   }
  render() { 
    if(this.state.hasError){
      return (
        <div>errorPage</div>
      )
    }else{
      return this.props.children
    }
  }
}
 
export default ErrorBoundary;