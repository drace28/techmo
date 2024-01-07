import "./App.css";
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'

import NavBar from "./components/navbar";
import Home from "./components/home/home";
import Contact from "./components/contact_us/contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  pageSize = 15;

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <div style={{ background: "linear-gradient(89.7deg, rgb(22, 22, 5) 1.8%, rgb(12, 19, 50) 100%", overflow: "auto", height: "100%" }}>
          <div style={{ display: "flex" }}> </div>
          <Router>
            <NavBar />
            <Switch>
              {/* <Route path="/products">
                <Products
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                />
              </Route>
              <Route path="/aboutus">
                <AboutUs />
              </Route> */}
              <Route path="/contactus">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <LoadingBar
              color='#7c8dd9'
              height={4}
              progress={this.state.progress} />

            

          </Router>
        </div>
      </>
    );
  }
}