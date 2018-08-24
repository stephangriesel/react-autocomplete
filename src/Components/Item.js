import React, { Component } from 'react';

class Item extends Component {
    
  render() {
    let itemList;
    if(this.props.item){
        itemList = this.props.item.map(project => {
            console.log(project);
        });
        
    }
    console.log(this.props);
    return (
      <li className="Autocomplete">
       My Autocomplete App
      </li>
    );
  }
}

export default Item;
