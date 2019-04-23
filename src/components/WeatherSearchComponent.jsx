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
  }&q=${this.queryString}`;

  onChange(e) {
    if (e.target.value.length >= 3) {
      //   console.log(e.target.value);
      this.queryString = e.target.value;
      console.log(this.url);
      console.log(this.queryString);
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
