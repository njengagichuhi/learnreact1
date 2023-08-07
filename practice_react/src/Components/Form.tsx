import { Component } from "react";
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };
  hundleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  hunleChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
    
  };
  hundlesubmit = (event) => {
    
    event.preventDefault();
    fname: this.state.firstname;
    lname: this.state.lastname;
   console.log(
    this.state.firstname,
    this.state.lastname
  )
  };
  
  render() {
    return (
      <div>
        Form
        <form action="" onSubmit={this.hundlesubmit}>
          <input
            placeholder="firstname"
            onChange={this.hundleChange}
            type="text"
            value={this.state.firstname}
          />
          <div>
            <input
              onChange={this.hunleChange}
              type="text"
              placeholder="lastname"
              value={this.state.lastname}
            />
          </div>
          <div>
            <button className="btn bg-primary text-light">submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
