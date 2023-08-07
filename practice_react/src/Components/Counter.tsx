import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      Counter: 0,
    };
  }
  render() {
    return <><h2> helloo moon:{this.state.Counter}</h2>
    <button> click me</button>
    </>;
  }
}
export default Counter;
