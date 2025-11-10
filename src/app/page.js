// src/app/page.js
"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SixtHeader from "@/components/SixtHeader";

export default function Home() {
  const [pickupDate, setPickupDate] = useState(new Date("2025-11-12"));
  const [pickupTime, setPickupTime] = useState("12:30");
  const [returnDate, setReturnDate] = useState(new Date("2025-11-16"));
  const [returnTime, setReturnTime] = useState("08:30");
  const [location, setLocation] = useState("Umeå/BMW");

  return (
    <>
      <SixtHeader />

      <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-orange-600 flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Slogan */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            PREMIUM AUTOS MIETEN.
            <br />
            ECONOMY BEZAHLEN.
          </h1>
        </div>

        {/* Formular */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-5xl z-10">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2">
              Autos
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2">
              Transporter
            </button>
          </div>

          {/* Abholung & Rückgabe */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Abholung & Rückgabe
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-3 text-gray-500"></span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="z.B. Zürich Flughafen"
                />
              </div>
              <button className="text-orange-600 font-medium text-sm">
                + Anderer Rückgabeort
              </button>
            </div>
          </div>

          {/* Datum & Uhrzeit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Abholung */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Abholdatum
              </label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => setPickupDate(date)}
                    dateFormat="dd. MMM"
                    locale="de"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-28 border border-gray-300 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Rückgabe */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rückgabedatum
              </label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    dateFormat="dd. MMM"
                    locale="de"
                    minDate={pickupDate}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-28 border border-gray-300 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 text-right">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-orange-700 transition shadow-lg">
              Autos anzeigen
            </button>
          </div>
        </div>

        {/* Hintergrund BMW */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
          <img
            src="/bmw-hero.jpg"
            alt="BMW"
            className="w-full h-auto object-cover opacity-80"
            style={{ maxHeight: "50vh" }}
          />
        </div>
      </div>
    </>
  );
}
