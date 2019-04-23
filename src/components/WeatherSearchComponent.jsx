import React, { Component } from "react";
import styled from "styled-components";

// const WeatherSearch = styled.input`
//   width: 400px;
// `;

class WeatherSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: ""
    };
  }

  apikey = "8nlNautAxdzGYmp0VEFdM8L9RILLMb5J";
  queryString = "";
  url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
    this.apikey
  }&q=`;

  searchCity(url) {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  onChange(e) {
    let url = "";
    if (e.target.value.length >= 4) {
      this.queryString = e.target.value;
      url = this.url + this.queryString;
      console.log(url);
      this.searchCity(url);
    }
    this.setState({
      inputvalue: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <WeatherSearch /> */}
        <input value={this.state.inputvalue} onChange={e => this.onChange(e)} />
      </React.Fragment>
    );
  }
}

export default WeatherSearchComponent;
