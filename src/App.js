import React, { Component } from "react"

class ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      pause: true
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.pause){
      if(nextState.count % 3===0){
        return true
      }
    }
    else return false;

  }
  reset=()=>{
    this.setState({
      count: 0
    })
  }
  pause=()=>{
    if(this.state.pause){
      this.setState({
        pause:false
      })
    }else{
      this.setState({
        pause:true
      })
    }
  }
  render() {
    return (
      <div className="container">
        <p>Count:{this.state.count}</p>
        <button type="button" onClick ={this.reset} >Reset</button>
        <button type="button" onClick={this.pause}>{this.state.pause? "Pause Ticker":"Ticker is paused" }</button>
      </div>
    )
  }
}
export default ticker