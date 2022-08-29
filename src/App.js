import React, { Component, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import  Card  from './component/Card';
const Movie = lazy(() => import("./component/Movie"))
const Detail = lazy(() => import("./component/Detail"))

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
            <div>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route exact path="/" element={<Movie />}></Route>
                  <Route path="/detail/:id" element={<Detail />}></Route>
                </Routes>
              </Suspense>
            </div>
          </Router>
          {/* <Card movie={this.state.movie} /> */}
      </div>
    );
  }
}
