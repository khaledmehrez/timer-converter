import React from 'react';
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {timeNumber : "" ,hour:0,minutes:0,secondes:0,starting:0};
    }
  
     handleChange=event => {
      this.setState({timeNumber: event.target.value})
    }
    
  
  start=()=>{
    
   this.interval=setInterval(() => {this.setState({timeNumber:parseInt(this.state.timeNumber)+1})}
  
     
   , 1000);}
  
   stop=()=>{
     clearInterval(this.interval)
   }
          
   reset=()=>{
    this.setState({timeNumber:""})
   }
  
  
    
   render(){
       return(
           <div>
    <input type="text" id="fname" name="fname" value={this.state.timeNumber}   onChange={this.handleChange}/>
    <button id="btn" type="button" onClick={this.start}    >start!</button>
    <button id="btn" type="button" onClick={this.stop}    >stop!</button>
    <button id="btn" type="button" onClick={this.reset}    >reset!</button>
    <p>hour={(Math.trunc(this.state.timeNumber/3600))}</p>
    <p>minutes={Math.trunc(this.state.timeNumber/60)%60}</p>
    <p>secondes={Math.trunc(this.state.timeNumber%60)}</p>
    
    
    </div>
    )    
   }
  }

export default Timer;