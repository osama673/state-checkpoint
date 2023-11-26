import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      fullName: "Conan Edogawa",
      bio: "Conan Edogawa , an APTX 4869 Victim who is also known by his real name Shinichi Kudo , is the main protagonist in the manga and anime franchise",
      imgSrc:
        "https://th.bing.com/th/id/OIP.qe2gfHdIn6iFxVRU89dtwQHaEB?rs=1&pid=ImgDetMain",
      profession: "Detective",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        
        <h1  className="title-name">{this.state.fullName}</h1>
        <h4 className="image">
          <img src={this.state.imgSrc} alt="Profile" />
        </h4>
        <h2>{this.state.bio}</h2>
        <h3 className="profession">{this.state.profession}</h3>
        <h5>{this.state.counter}s</h5>
      </div>
    );
  }
}
