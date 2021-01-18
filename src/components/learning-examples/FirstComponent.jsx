import React, { Component } from 'react'

//Class component
class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
          FirstComponent
        </div>
      );
    }
}

//Class component
export class SecondComponent extends Component {
    render() {
      return (
        <div className="secondComponent">
          SecondComponent
        </div>
      );
    }
  }

export default FirstComponent