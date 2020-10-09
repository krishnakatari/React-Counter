import React, { Component } from "react";
import Counter from "./counter";
import _ from "lodash";
class Counters extends Component {
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
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              incrementprop={this.handleIncrement}
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
