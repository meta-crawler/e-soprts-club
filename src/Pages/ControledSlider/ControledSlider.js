import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick/lib/slider";

export default class ControledSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      pauseOnHover: false,
      slidesToScroll: 1,
    };

    return (
      <div className="container">
        <div className="my-5">
          <FontAwesomeIcon
            className="me-2"
            onClick={this.previous}
            icon={faArrowLeft}
          />
          <FontAwesomeIcon onClick={this.next} icon={faArrowRight} />
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, i) => (
            <div>Player -{i + 1}</div>
          ))}
        </Slider>
      </div>
    );
  }
}
