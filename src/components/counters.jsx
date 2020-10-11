import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    // temp[3].value += 5;
    // console.log(temp, " ", this.state.counters);
    // if (temp[3] === this.state.counters[3]) {
    //   console.log(
    //     "Equal" + temp[3].value + "  " + this.state.counters[3].value
    //   );
    // } else {
    //   console.log("NQ" + temp[3].value + "  " + this.state.counters[3].value);
    // }
    // // const temp = { ...this.state.counters[2] };
    // temp.value += 1;
    // if (temp === this.state.counters[2]) {
    //   console.log(
    //     "Equal" + temp[2].value + "  " + this.state.counters[2].value
    //   );
    // } else {
    //   console.log("NQ" + temp.value + "  " + this.state.counters[2].value);
    // }
  
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              incrementprop={this.props.handlepropapp}
              counter={counter}
            >
              <h6> Counter no is {counter.val}</h6>
            </Counter>
          );
        })}
        <h3> header3</h3>
      </div>
    );
  }
}

export default Counters;
