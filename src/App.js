//import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from 'react';
import _ from "lodash";
class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    //    const temp = this.state.counters.map((c) => c);
    //const temp = [...this.state.counters];
    const temp = _.cloneDeep(this.state.counters);
    const temp2 = temp.map((c) => {
      if (c.id === counter.id) {
        c.value += 1;
      }
      return c;
    });
    this.setState({ counters: temp2 });
    return "Abba";
  }
  
 render() { 
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters counters={this.state.counters}
        handlepropapp={this.handleIncrement}>

          </Counters>
      </main>
    </React.Fragment>
    
    
  );

  }
}
 
export default App;
