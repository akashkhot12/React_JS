import React, { useEffect, useState } from "react";
import "./css/style.css";
export default function TempApp() {
  const [city, setCity] = useState("Nagpur");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=54ce410dcafc65cdec7c4a58bedf17a7`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
      console.log(resJson);
    };

    fetchApi();
  },[setSearch]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      {!city ? (
        <p>No data found</p>
      ) : (
        <div>
          <div className="info">
            <h2 className="locations">{search}</h2>
            <h1 className="temp">{city?.main?.temp || "loading"}</h1>
            <h3 className="tempMin_max">5.25 Cel</h3>
          </div>
        </div>
      )}
    </>
  );
}
