import axios from "axios";
import { useState, useEffect } from "react";
import CityInput from "./cityInput";

const Forecast = () => {
  interface IWeather {
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: Array<{ main: string }>;

    wind: {
      speed: number;
    };
    name: string;
  }

  const [data, setData] = useState<IWeather>({} as IWeather);
  const [location, setLocation] = useState("");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8d4362e2959426a41c8e457c1ac5c34a&units=metric`;

  const getLocation = (event: any) => {
    if (event.key === "Enter") {
      axios
        .get(apiUrl)
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          alert("City not found");
        });
    }
  };

  return (
    <div className="mt-2 flex w-4/5 flex-col rounded-sm p-6 lg:w-2/4 ">
      <div className="flex flex-col items-center">
        <CityInput
          location={location}
          setLocation={setLocation}
          getLocation={getLocation}
        />
        <div className="flex w-full flex-col rounded-sm bg-slate-800 p-8">
          <div className="flex justify-between">
            {/* City */}
            <h1 className="text-3xl">{data.name}</h1>
            {/* Temperature */}
            <p className="text-5xl">
              {data.main ? <h1>{Math.floor(data.main.temp)}°C</h1> : null}
            </p>
          </div>
          <div className="flex justify-between">
            {/* Weather */}
            <p className="text-xl">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </p>
            {/* Fells like: 1°C */}
            <p className="text-xl">
              {data.main ? (
                <p className="text-xl">{Math.floor(data.main.feels_like)}°C</p>
              ) : null}
            </p>
          </div>
          <div className="flex justify-between pt-10 ">
            {/* Humidity: 80% */}
            <p>
              {data.main ? (
                <p className="text-xl">
                  Humidity: {Math.floor(data.main.humidity)}%
                </p>
              ) : null}
            </p>
            {/* Wind: 2m/s */}
            <p>
              {data.wind ? (
                <p className="text-xl">
                  Wind: {Math.floor(data.wind.speed)}m/s
                </p>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
