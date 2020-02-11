import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {

  const weatherForecast = props.weatherForecast;

  const dailyCard = weatherForecast.map((index) => {
    return (
      <div className="ui card" id="card" key={index.date_epoch}>
        <div className="content">
          {index.date}
          <div className="image">
            <img src={index.day.condition.icon} alt="Weather Icon" />
          </div>
          Conditions: {index.day.condition.text}
          <div className="meta">
            <p className="header">
              <span>High/Low: {index.day.maxtemp_f}f/{index.day.mintemp_f}f
              </span>
            </p>
          </div>
          <div className="description">
          </div>
        </div>
      </div>
    )
  })

  return(
    <div>
      {dailyCard}
    </div>
  )
}

export default WeatherCard;
