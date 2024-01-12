import React, { Component } from 'react';
import hdpe_roll from './assests/hdpe_roll.jpeg';
import pvc_pipe from './assests/pvc_pipe.jpeg';
import cpvc_pipe from './assests/cpvc_pipe.jpeg';
import './CardSlider.css';

class Slider extends Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="item active">
                  <img src={hdpe_roll} alt="HDPE Roll"/>
                  <div class="carousel-caption">
                    <h3>HDPE Roll</h3>
                    <p>We offer various options in HDPE rolls</p>
                  </div>
                  </div>
                <div class="item">
                  <img src={pvc_pipe} alt="PVC pipe" />
                  <div class="carousel-caption">
                    <h3>PVC Pipe</h3>
                    <p>Various option are available in PVC Pipes</p>
                  </div>
                </div>
                <div class="item">
                  <img src={cpvc_pipe} alt="CPVC pipe" />
                  <div class="carousel-caption">
                    <h3>CPVC Pipe</h3>
                    <p>Choose form different options available</p>
                    </div>
                </div>
              </div>

              <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                <span><i class="fa fa-angle-left"></i></span>
              </a>
              <a class="carousel-control right" href="#myCarousel" data-slide="next">
                <span><i class="fa fa-angle-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
