"use client";
import React, { useState } from "react"; // Import useState from React

import Image from "next/image";
import Navbar from "@/components/Navbar";
import beach from "../public/beach.jpg";
import axios from "axios";

export default function Home() {
  const optionstranslate = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "cea139e70dmshcff34d511423f76p1b1e31jsn2ba989558468",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  };
  async function calltranslateapi() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Declare a state variable for the search input
  const [searchInput, setSearchInput] = useState(""); // Initialize it with an empty string
  const [hotelSearchInput, setHotelSearchInput] = useState("");
  const [responseData, setResponseData] = useState(null); // Initialize it with null
  const [hotelResponseData, setHotelResponseData] = useState(null);
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: searchInput,
      days: "7",
    },
    headers: {
      "X-RapidAPI-Key": "cea139e70dmshcff34d511423f76p1b1e31jsn2ba989558468",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const optionshotel = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v3/search",
    params: {
      q: hotelSearchInput,
      locale: "en_IN",
      langid: "1033",
      siteid: "300000001",
    },
    headers: {
      "X-RapidAPI-Key": "cea139e70dmshcff34d511423f76p1b1e31jsn2ba989558468",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  async function callapi() {
    try {
      const response = await axios.request(options);
      // Set the response data in the state
      setResponseData(response.data.forecast.forecastday);
      console.log(response.data.forecast.forecastday);
    } catch (error) {
      console.error(error);
    }
  }

  async function callhotelapi() {
    try {
      const response = await axios.request(optionshotel);
      setHotelResponseData(response.data.sr);
      console.log(response.data.sr);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col w-screen min-h-screen bg-[url('../public/beach.jpg')] bg-cover ">
      <Navbar />
      <div className="flex justify-between">
        <div className="flex flex-col  ml-5 items-center ">
          <h1 className="text-white font-semibold text-5xl ">Rain check? </h1>
          <div className="flex   gap-3  ml-3 items-center w-full h-28 ">
            <input
              className="shadow-2xl p-4 rounded-2xl text-2xl ml-16 placeholder:text-white text-white bg-white bg-opacity-0 border-2 border-whitecd focus:outline-none"
              placeholder="Enter a city"
              // Set the input value to the searchInput state variable
              value={searchInput}
              // Update the searchInput state variable when the input changes
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="shadow-2xl hover:scale-110 transition-transform p-4 h-16 font-semibold text-inherit bg-white rounded-3xl bg-opacity-100 "
              // Call the callapi function when the button is clicked
              onClick={callapi}
            >
              {" "}
              Search{" "}
            </button>
          </div>

          {responseData && (
            <div className=" text-black font-serif ml-5">
              <ul>
                {responseData.map((forecast, index) => (
                  <li
                    className="flex flex-col  text-xl font-semibold"
                    key={index} // Set a unique key for each <li> element
                  >
                    <div className="w-[25rem] h-1 bg-white"></div>
                    <div className="flex items-center">
                      <h1 className="font-mono text-white">
                        {" "}
                        {forecast.date}: {forecast.day.condition.text}{" "}
                        {forecast.day.avgtemp_c} °C
                      </h1>
                      <img
                        className=""
                        src={forecast.day.condition.icon}
                        alt="Weather icon"
                      />
                    </div>
                    <div className="w-[25rem] h-1 bg-white"></div>
                    <div className="chance flex items-center gap-2 my-2">
                      <h2 className="font-mono text-white">
                        Chance of Rain: {forecast.day.daily_chance_of_rain}
                      </h2>
                      <h2 className="font-mono text-white">
                        {" "}
                        Wind Speed: {forecast.day.maxwind_kph} km/h
                      </h2>
                    </div>
                    <div className="w-[25rem] h-1 bg-white mb-1"></div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Render the response data below the input and button */}

        <div className="hotel flex-col flex w-[45rem] ">
          <h1 className="text-white text-5xl font-semibold "> Nearby! </h1>
          <div className="flex gap-3 mt-5 mr-5 ">
            <input
              className="shadow-2xl p-4 rounded-2xl text-2xl placeholder:text-white text-white bg-white bg-opacity-0 border-2 border-white focus:outline-none"
              placeholder="Enter a city"
              // Set the input value to the searchInput state variable
              value={hotelSearchInput}
              // Update the searchInput state variable when the input changes
              onChange={(e) => setHotelSearchInput(e.target.value)}
            />
            <button
              className="shadow-2xl hover:scale-110 transition-transform px-4  h-16  font-semibold text-inherit bg-white rounded-3xl bg-opacity-100 "
              // Call the callapi function when the button is clicked
              onClick={callhotelapi}
            >
              Search
            </button>
          </div>
          {hotelResponseData && (
            <div className="mt-4 text-white font-serif mr-5 ">
              <ul>
                {hotelResponseData.map((hotel, index) => (
                  <li
                    className="flex flex-col  text-xl font-semibold"
                    key={index}
                  >
                    <div className="w-full h-1 bg-white "></div>
                    <div className="flex items-center">
                      <h1 className="font-mono">
                        {" "}
                        {hotel.type} : {hotel.regionNames.primaryDisplayName}{" "}
                      </h1>
                    </div>
                    <div className="flex items-center"></div>
                    <div className="chance flex items-center gap-2">
                      {/* You can add more information from the hotel object as needed */}
                    </div>
                    <div className="w-full h-1 bg-white mb-1"></div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
