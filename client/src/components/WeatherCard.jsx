import React, { useState } from "react";
import styled from "styled-components";

const WeatherCard = (props) => {
  const [forecast] = useState(props.forecast);

  return (
    <Container>
      <h6>Location : {forecast.title}</h6>
      <h6>Time : {forecast.time}</h6>
      <h6>Sun Rise : {forecast.sun_rise}</h6>
      <h6>Sun Set : {forecast.sun_set}</h6>
      <h6>Time Zone : {forecast.timezone}</h6>
      <span>{forecast.consolidated_weather[0].the_temp}</span>
    </Container>
  );
};

const Container = styled.div`
  color: #32325d;
  margin-top: 418px;
  margin: auto;
  padding: 36px;
  width: 500px;
  h1 {
    color: #32325d;
    font-size: 52px;
    font-weight: 600;
    line-height: 52px;
    padding-bottom: 48px;
    padding-top: 48px;
    text-align: center;
  }
  h6 {
    font-size: 2rem;
    margin-bottom: 32px;
    margin-top: 264px;
  }
  span {
    font-size: 6rem;
    margin-top: 32px;
  }
`;

export default WeatherCard;
