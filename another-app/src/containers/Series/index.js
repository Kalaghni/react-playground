import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

class Series extends Component {
    state = {
        series: [],
        seriesName: "",
        isFetching: false,
      }
     

    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({series: json, isFetching: false}));
    }

    render() {
        const {series, seriesName, isFetching } = this.state; 
        return ( 
            <div>
            <Intro message="Welcome to my React site"/>
            The length of series array - {this.state.series.length}
            <div>
                <input 
                value={seriesName} 
                type="text" 
                onChange={this.onSeriesInputChange} />
            </div>
            { 
                 series.length === 0 && seriesName.trim() === "" && !isFetching 
                 &&
                 <p>Please enter series name into the input</p>
            }
            {
                series.length === 0 && seriesName.trim() !== "" && !isFetching 
                &&
                <p>No results found.</p>
            }
            {
                isFetching && <Loader/>
            }
            {
                !isFetching && <SeriesList list={this.state.series}/> 
            } 
            </div>
        )
    }
}

export default Series;