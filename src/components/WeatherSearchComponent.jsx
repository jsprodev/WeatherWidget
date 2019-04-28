import React, { Component } from "react";
// import styled from "styled-components";
// import Select from "react-select";
import AsyncSelect from "react-select/lib/Async";

// const WeatherSearch = styled.input`
//   width: 400px;
// `;

class WeatherSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  apikey = "8nlNautAxdzGYmp0VEFdM8L9RILLMb5J";
  queryString = "";
  url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
    this.apikey
  }&q=`;
  loading = null;

  // onChange(e) {
  //   let url = "";
  //   if (e.target.value.length >= 4) {
  //     // this.queryString = e.target.value;
  //     // url = this.url + this.queryString;
  //     // console.log(url);
  //     this.searchCity(
  //       "https://restcountries.eu/rest/v2/name/" + e.target.value
  //     );
  //   }
  //   this.loading = null;
  //   this.setState({ inputvalue: e.target.value }, () => {
  //     console.log(this.state.inputvalue);
  //   });
  // }

  // searchCity(url) {
  //   let controller = new AbortController();
  //   let signal = controller.signal;
  //   if (this.loading != null) {
  //     console.log("now aborting");
  //     controller.abort();
  //     return;
  //   }
  //   fetch(url, {
  //     method: "get",
  //     signal: signal
  //   })
  //     .then(res => {
  //       this.loading = true;
  //       return res.json();
  //     })
  //     .then(json => {
  //       console.log(json);
  //       this.colourOptions = json;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       return e;
  //     });
  // }

  filterColors(inputValue) {
    if (inputValue !== "" && inputValue.length >= 4) {
      fetch("https://restcountries.eu/rest/v2/name/" + inputValue)
        .then(res => {
          return res.json();
        })
        .then(json => {
          return json.filter(i => {
            i.name.includes(inputValue);
          });
        })
        .catch(e => {
          console.log(e);
          return e;
        });
      // this.setState({ inputvalue: inputValue }, () => {
      //   // console.log(this.state.inputvalue);
      // });
    }
  }

  promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(this.filterColors(inputValue));
    });

  render() {
    return (
      <React.Fragment>
        {/* <WeatherSearch /> */}
        {/* <input value={this.state.inputvalue} onChange={e => this.onChange(e)} /> */}
        <AsyncSelect loadOptions={this.promiseOptions} />
      </React.Fragment>
    );
  }
}

export default WeatherSearchComponent;
