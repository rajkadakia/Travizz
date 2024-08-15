"use client";
import React, { useState } from "react"; // Import useState from React
import Image from "next/image";
import Navbar from "@/components/Navbar";
import axios from "axios";

export default function InSight() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-[url('../public/beach.jpg')] bg-cover ">
      <Navbar />
      <div className="flex flex-col  ml-5 items-center ">
        <h1 className="text-white font-semibold text-5xl ">About us</h1>
      </div>
      <div className="flex flex-col text-black font-serif ml-5 items-center">
        <h1 className="text-white  text-xl mt-10  ">
          <p>
            {" "}
            The Indian City Travel App is your one-stop solution for exploring
            the
          </p>
          <p>
            {" "}
            diverse and beautiful cities of India. Whether you're a local
            looking
          </p>
          <p>
            {" "}
            for a new adventure or a tourist planning your visit, this app
            offers
          </p>
          <p> a wealth of information to enhance your travel experience.</p>
        </h1>
        <h1 className="text-white  text-xl mt-5">
          {" "}
          Key Features:
          <p className="mt-3">
            {" "}
            Weather Info: Get real-time weather updates for Indian cities. Stay
            informed about temperature, humidity, and weather conditions.
          </p>
          <p className="mt-3">
            {" "}
            Nearby Places: Discover nearby attractions, landmarks, and points of
            interest. Find restaurants, hotels, and other essential services in
            your vicinity.
          </p>
          <p className="mt-3">
            {" "}
            Itineraries: Access carefully curated itineraries for the top 10
            Indian cities. Explore suggested plans for an unforgettable journey.
          </p>
          <p className="mt-3">
            In summary, our website simplifies the travel planning process,
            provides essential information at users' fingertips, and enhances
            the overall travel experience by addressing common problems and
            offering practical solutions
          </p>
        </h1>
      </div>
    </div>
  );
}
