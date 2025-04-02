"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);

    const formattedDate = futureDate.toLocaleDateString();
    const formattedTime = futureDate.toLocaleTimeString();
    const dayOfWeek = futureDate.toLocaleDateString("en-US", {
      weekday: "long",
    });

    setResult(
      `Date: ${formattedDate}, Day: ${dayOfWeek}, Time: ${formattedTime}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center text-gray-800"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
          Days + Hours Calculator
        </h1>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Enter hours"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCalculate}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          Calculate
        </motion.button>
        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-lg text-gray-700 font-medium bg-gray-100 p-4 rounded-lg shadow"
          >
            {result}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
