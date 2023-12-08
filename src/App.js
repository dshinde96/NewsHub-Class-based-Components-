
import React, { Component } from "react";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            country: "in"
        }
    }
    render() {
        return (
            <>
                <Navbar/>
                <Routes>

                    {/* Give every route a unique key such that it should understand that each route is different and refetch the data according */}
                    <Route exact path="/" element={<News key="general" category="general" country={this.state.country} />} />
                    <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country={this.state.country} />} />
                    <Route exact path="/sports" element={<News key="sports" category="sports" country={this.state.country} />} />
                    <Route exact path="/business" element={<News key="business" category="business" country={this.state.country} />} />
                    <Route exact path="/health" element={<News key="health" category="health" country={this.state.country} />} />
                    <Route exact path="/science" element={<News key="science" category="science" country={this.state.country} />} />
                    <Route exact path="/technology" element={<News key="technology" category="technology" country={this.state.country} />} />
                </Routes>
            </>
        )
    }
}


