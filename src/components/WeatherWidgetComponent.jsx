import React, { Component } from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
`;

const Widget = styled.div`
  width: 215px;
  flex: 1
  height: 320px;
  background: white;
`;

const Date = styled.div``;

const Title = styled.div``;

const Temperature = styled.div``;

class WeatherWidgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  apikey = "8nlNautAxdzGYmp0VEFdM8L9RILLMb5J";
  metric = true;
  url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/1766690?apikey=${
    this.apikey
  }&metric=${this.metric}`;

  getData() {
    let _this = this;
    fetch(this.url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        _this.setState({
          data: json.DailyForecasts,
          loading: false
        });
        console.log(json);
      });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    const { data, loading } = this.state;
    return (
      <React.Fragment>
        <WidgetContainer>
          {loading
            ? null
            : data.map((value, i) => (
                <Widget key={i}>
                  <Date>{value.Date}</Date>
                  <Title>{value.Day.IconPhrase}</Title>
                  <Temperature>
                    {value.Temperature.Maximum.Value} C |&nbsp;
                    {value.Temperature.Minimum.Value} C
                  </Temperature>
                </Widget>
              ))}
        </WidgetContainer>
      </React.Fragment>
    );
  }
}

export default WeatherWidgetComponent;
