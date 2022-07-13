//import logo from './logo.svg';
import React from "react";
import './App.css';
import {RequestResponseFunc} from "./getPosts"

//setLatestJSPost()
const API_URL = "http://localhost:8080/1806296/StudentServlet";
class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count : 0,
      student:[]
    };
  }


  increment = ()=>{

    console.log("increment called "+this.state.count);
    const newcount = this.state.count<10?{count:this.state.count+1}:{count:this.state.count};
    this.setState(newcount);

  }

  decrement = ()=>{

    console.log("decrement called "+this.state.count);
    const newcount = this.state.count>0?{count:this.state.count-1}:{count:this.state.count};
    this.setState(newcount);

  }

  componentDidMount(){
    
    const fetchInfo=async()=>{

          const data = await RequestResponseFunc(API_URL);
          this.setState({student:data});
          console.log(this.state.student)
    }
    fetchInfo();

  }

  handleClick = ()=>{

      const fetchInfo=async()=>{
      
        RequestResponseFunc(API_URL,this.state.student);
      
      }

      fetchInfo();
}

  render(){

    const styles = {
      border:"1px solid black",
      borderCollapse :"collapse"
    }
    return (

     
      <>
      <h2
      style={{backgroundColor:this.state.count%3===0?"yellow":"white"}}>COUNTER : {this.state.count}</h2>
      {/*this.state.count<10 && <button type="button" onClick={this.increment}>up</button>*/}
      <button type="button" style={{display:this.state.count===10?"none":"inline"}} onClick={this.increment}>up</button>
      {/*this.state.count>0 && <button type="button"  onClick={this.decrement}>down</button>*/}
      <button type="button"  style={{display:this.state.count===0?"none":"inline"}} onClick={this.decrement}>down</button>
      <br/><br/>
      
      <table style={styles}>
            <tr>
            <th style={styles}>Name</th>
            <th style={styles}>branch</th>
            <th style={styles}>roll</th>
            <th style={styles}>subject1</th>
            <th style={styles}>subject2</th>
            </tr>
      {
          this.state.student.map(val => {

                  
                         return(   <>
                            
                            <tr>
                            <td style={styles}>{val.name}</td>
                            <td style={styles}>{val.branch}</td>
                            <td style={styles}>{val.roll}</td>
                            <td style={styles}>{val.subject1}</td>
                            <td style={styles}>{val.subject2}</td>
                            </tr>
                            </>)
         }) 
        
        }
      
      </table>
      <button onClick={this.handleClick}>submit</button>
       
      </>

    );
  }
}

function App() {
  return (
    <div>
     <Counter/>
    </div>
  );
}

export default App;
