import React, { Component } from 'react';

class Autocomplete extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Autocomplete">
       My Autocomplete App<br />
       {this.props.test}
      </div>
    );
  }
}

export default Autocomplete;
