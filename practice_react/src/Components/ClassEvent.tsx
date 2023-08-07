import { Component } from "react";
class ClassEvent extends Component {
  hundleClick(){
    console.log("this is my life now")
  }
  render() {
    return (
      <div>
        <h2>this is a class component</h2>
        <button onClick={this.hundleClick} className="btn btn-primary">button</button>
      </div>
    );
  }
}
export default ClassEvent;
