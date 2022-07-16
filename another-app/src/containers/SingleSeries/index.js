import React, { Component } from "react";
import Loader from "../../components/Loader";
import 'whatwg-fetch';
import { useParams } from 'react-router-dom';

class SingleSeries extends Component {
    state = {
        show: null,
        id: 0
    }

    componentDidMount() {
        GetID().then((response) => {
            console.log(response);
        });
    }

     render() {
        return (
            <div>
                <p>Single Series - </p>
            </div>
        );
    }
}

async function GetID() {
    let params = useParams();
    let id = params.id;
    fetch(`http://api.tvmaze.com/search/shows/${id}?embed=episodes`)
    .then((response) => response.json())
    .then(json =>{ return json});
}

export default SingleSeries; 