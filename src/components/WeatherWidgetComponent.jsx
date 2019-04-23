import React, { Component } from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Widget = styled.div`
  // width: 115px;
  // height: 320px;
  flex: 1;
  background: #eee;
  padding: 10px 20px;
  margin: 10px;
`;

const Date = styled.div``;

const Title = styled.div``;

const Temperature = styled.div``;

class WeatherWidgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"Date":"2019-04-23T07:00:00+05:00","EpochDate":1555984800,"Temperature":{"Minimum":{"Value":27,"Unit":"C","UnitType":17},"Maximum":{"Value":43.6,"Unit":"C","UnitType":17}},"Day":{"Icon":5,"IconPhrase":"Hazy sunshine"},"Night":{"Icon":37,"IconPhrase":"Hazy moonlight"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=1&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=1&unit=c&lang=en-us"},{"Date":"2019-04-24T07:00:00+05:00","EpochDate":1556071200,"Temperature":{"Minimum":{"Value":28.5,"Unit":"C","UnitType":17},"Maximum":{"Value":40,"Unit":"C","UnitType":17}},"Day":{"Icon":5,"IconPhrase":"Hazy sunshine"},"Night":{"Icon":37,"IconPhrase":"Hazy moonlight"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=2&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=2&unit=c&lang=en-us"},{"Date":"2019-04-25T07:00:00+05:00","EpochDate":1556157600,"Temperature":{"Minimum":{"Value":26.6,"Unit":"C","UnitType":17},"Maximum":{"Value":39.2,"Unit":"C","UnitType":17}},"Day":{"Icon":5,"IconPhrase":"Hazy sunshine"},"Night":{"Icon":37,"IconPhrase":"Hazy moonlight"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=3&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=3&unit=c&lang=en-us"},{"Date":"2019-04-26T07:00:00+05:00","EpochDate":1556244000,"Temperature":{"Minimum":{"Value":24.5,"Unit":"C","UnitType":17},"Maximum":{"Value":39.3,"Unit":"C","UnitType":17}},"Day":{"Icon":5,"IconPhrase":"Hazy sunshine"},"Night":{"Icon":37,"IconPhrase":"Hazy moonlight"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=4&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=4&unit=c&lang=en-us"},{"Date":"2019-04-27T07:00:00+05:00","EpochDate":1556330400,"Temperature":{"Minimum":{"Value":24.1,"Unit":"C","UnitType":17},"Maximum":{"Value":40.2,"Unit":"C","UnitType":17}},"Day":{"Icon":5,"IconPhrase":"Hazy sunshine"},"Night":{"Icon":37,"IconPhrase":"Hazy moonlight"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=5&unit=c&lang=en-us","Link":"http://www.accuweather.com/en/pk/islamabad/1766690/daily-weather-forecast/1766690?day=5&unit=c&lang=en-us"}],
      loading: false
    };
  }

  apikey = "8nlNautAxdzGYmp0VEFdM8L9RILLMb5J";
  metric = true;
  details = true;
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
        console.log(JSON.stringify(json));
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  componentWillMount() {
    // this.getData();
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
