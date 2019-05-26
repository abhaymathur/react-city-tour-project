import React, { Component } from "react";
import tourData from "../../tourData";
import Tour from "../Tour";
import "./tourlist.scss";

export default class Tourlist extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       tours: tourData
  //     };
  //   }

  state = {
    tours: tourData
  };
  removetourfunc = id => {
    const sortedlist = this.state.tours.filter(item => item.id !== id);
    this.setState({
      tours: sortedlist
    });
  };

  render() {
    return (
      <section class="allplaces">
        {this.state.tours.map(item => (
          <Tour key={item.id} item={item} removetour={this.removetourfunc} />
        ))}
      </section>
    );
  }
}
