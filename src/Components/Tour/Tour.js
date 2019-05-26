import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showinfo: false
  };

  toggleinfo = id => {
    this.setState({ showinfo: !this.state.showinfo });
  };

  render() {
    //console.log(this.props);
    const { id, city, img, name, info } = this.props.item;
    const { removetour } = this.props;
    return (
      <article className="allcities">
        <div className="img-container">
          <img src={img} />
          <span className="closebtn" onClick={() => removetour(id)}>
            <i class="far fa-times-circle" />
          </span>
        </div>
        <div className="tourinfo">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span className="infobtn">
              <i
                class="fas fa-chevron-circle-down"
                onClick={() => this.toggleinfo(id)}
              />
            </span>
          </h5>
          {this.state.showinfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
