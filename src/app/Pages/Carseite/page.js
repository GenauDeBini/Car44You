"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SixtHeader from "@/components/SixtHeader";
import Image from "next/image";
import fiat500 from "@/Images/fiat500.png";
import colt from "@/Images/colt.png";
import golf from "@/Images/golf.png";
import bmw1 from "@/Images/bmw1.png";
import a3 from "@/Images/a3.png";
import corsa from "@/Images/corsa.png";
import ibiza from "@/Images/ibiza.png";
import peugeot208 from "@/Images/peugeot208.png";
import corolla from "@/Images/corolla.png";
import clio from "@/Images/clio.png";
import mini from "@/Images/mini.png";
import model3 from "@/Images/model3.png";
import xc40 from "@/Images/xc40.png";
import focus from "@/Images/focus.png";
import leaf from "@/Images/leaf.png";

const cars = [
  {
    name: "Fiat 500",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Manuell",
    seats: 4,
    luggage: 2,
    price: 42.25,
    image: fiat500,
  },
  {
    name: "Mitsubishi Colt",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Automatik",
    seats: 5,
    luggage: 2,
    price: 47.74,
    image: colt,
  },
  {
    name: "VW Golf",
    category: "Family",
    type: "Kompaktklasse",
    gearbox: "Manuell",
    seats: 5,
    luggage: 3,
    price: 48.74,
    image: golf,
  },
  {
    name: "BMW 1er",
    category: "Family",
    type: "Kompaktklasse",
    gearbox: "Automatik",
    seats: 5,
    luggage: 3,
    price: 55.9,
    image: bmw1,
  },
  {
    name: "Audi A3",
    category: "Family",
    type: "Kompaktklasse",
    gearbox: "Automatik",
    seats: 5,
    luggage: 3,
    price: 58.3,
    image: a3,
  },
  {
    name: "Opel Corsa",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Manuell",
    seats: 5,
    luggage: 2,
    price: 43.1,
    image: corsa,
  },
  {
    name: "Seat Ibiza",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Manuell",
    seats: 5,
    luggage: 2,
    price: 44.8,
    image: ibiza,
  },
  {
    name: "Peugeot 208",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Automatik",
    seats: 5,
    luggage: 2,
    price: 46.2,
    image: peugeot208,
  },
  {
    name: "Toyota Corolla",
    category: "Family",
    type: "Mittelklasse",
    gearbox: "Automatik",
    seats: 5,
    luggage: 3,
    price: 59.3,
    image: corolla,
  },
  {
    name: "Renault Clio",
    category: "City",
    type: "Kleinwagen",
    gearbox: "Manuell",
    seats: 5,
    luggage: 2,
    price: 45.1,
    image: clio,
  },
  {
    name: "Mini Cooper",
    category: "Sport",
    type: "Kleinwagen",
    gearbox: "Automatik",
    seats: 4,
    luggage: 2,
    price: 54.2,
    image: mini,
  },
  {
    name: "Tesla Model 3",
    category: "E-Car",
    type: "Elektro",
    gearbox: "Automatik",
    seats: 5,
    luggage: 4,
    price: 89.9,
    image: model3,
  },
  {
    name: "Volvo XC40",
    category: "SUV",
    type: "SUV",
    gearbox: "Automatik",
    seats: 5,
    luggage: 4,
    price: 84.3,
    image: xc40,
  },
  {
    name: "Ford Focus",
    category: "Family",
    type: "Kompaktklasse",
    gearbox: "Manuell",
    seats: 5,
    luggage: 3,
    price: 50.8,
    image: focus,
  },
  {
    name: "Nissan Leaf",
    category: "E-Car",
    type: "Elektro",
    gearbox: "Automatik",
    seats: 5,
    luggage: 3,
    price: 68.4,
    image: leaf,
  },
];

const categories = ["Alle", "City", "Family", "SUV", "Sport", "E-Car"];

const AllCarsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const prices = cars.map((c) => c.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));
  const [maxBudget, setMaxBudget] = useState(maxPrice);

  const filteredCars = (
    activeCategory === "Alle"
      ? cars
      : cars.filter((car) => car.category === activeCategory)
  ).filter((car) => car.price <= maxBudget);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-orange-700 text-white py-16 px-6 overscroll-none"
      style={{ overscrollBehavior: "none" }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Unsere Fahrzeuge</h1>

      <div className="flex flex-col items-center mb-16">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-12">
          <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-8 rounded-xl font-semibold transition ${
                  activeCategory === cat
                    ? "bg-orange-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center gap-6">
            <span className="text-sm text-gray-300 hidden md:block">
              Max. Budget
            </span>
            <input
              aria-label="Maximales Budget"
              type="range"
              min={minPrice}
              max={maxPrice}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-64 md:w-80 accent-orange-600"
            />
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
              CHF {maxBudget}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition p-6 flex flex-col items-center"
          >
            {typeof car.image === "object" ? (
              <Image
                src={car.image}
                alt={car.name}
                width={208}
                height={128}
                className="object-contain mb-4"
              />
            ) : (
              <img
                src={car.image}
                alt={car.name}
                className="w-52 h-32 object-contain mb-4"
              />
            )}
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p className="text-sm text-gray-300">
              {car.type} – {car.gearbox}
            </p>

            <div className="flex gap-4 mt-3 text-gray-400 text-sm">
              <span>👥 {car.seats}</span>
              <span>🧳 {car.luggage}</span>
              <span>⚙️ {car.gearbox}</span>
            </div>

            <p className="text-orange-400 text-lg font-semibold mt-3">
              CHF {car.price.toFixed(2)} / Tag
            </p>

            <button className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-xl">
              Jetzt buchen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCarsPage;
