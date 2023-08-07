import {Component} from "react"
class Message extends Component{
 render(){
    return <h1 className="container text-primary text-center">message:{this.props.MessageCode}</h1>
 } 

}
export default Message

