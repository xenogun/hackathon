"use client"; // Add this directive at the top of the file

import React, { useState } from "react";

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    sleepHours: "",
    sleepQuality: "",
    screenTime: "",
    physicalActivity: "",
    eatingHabits: "",
    hydration: "",
    stress: "",
    concentration: "",
    agreeToSuggestions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your responses!");
  };

  return (
    <div className="p-8 bg-base-100" data-theme="lemonade">
      <h1 className="text-3xl font-bold text-center mb-8">
        Lifestyle Questionnaire
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Question 1: Sleep Hours */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Sleep</h2>
          <p className="mb-4">
            How many hours do you sleep on average per night?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Less than 6 hours",
              "6 to 7 hours",
              "7 to 8 hours",
              "More than 8 hours",
            ].map((option) => (
              <label
                key={option}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                  formData.sleepHours === option
                    ? "bg-lime-100 border-lime-500" // Selected state
                    : "bg-base-100 border-base-300" // Default state
                }`}
              >
                <input
                  type="radio"
                  name="sleepHours"
                  value={option}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-lg font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 2: Sleep Quality */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Sleep Quality</h2>
          <p className="mb-4">How would you rate the quality of your sleep?</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Very poor", "Poor", "Average", "Good", "Very good"].map(
              (option) => (
                <label
                  key={option}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                    formData.sleepQuality === option
                      ? "bg-lime-100 border-lime-500" // Selected state
                      : "bg-base-100 border-base-300" // Default state
                  }`}
                >
                  <input
                    type="radio"
                    name="sleepQuality"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-lg font-medium">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Question 3: Screen Time */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Screen Time</h2>
          <p className="mb-4">
            How many hours do you spend per day in front of a screen (outside of
            work)?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Less than 1 hour",
              "1 to 3 hours",
              "3 to 5 hours",
              "More than 5 hours",
            ].map((option) => (
              <label
                key={option}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                  formData.screenTime === option
                    ? "bg-lime-100 border-lime-500" // Selected state
                    : "bg-base-100 border-base-300" // Default state
                }`}
              >
                <input
                  type="radio"
                  name="screenTime"
                  value={option}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-lg font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 4: Physical Activity */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Physical Activity</h2>
          <p className="mb-4">How many days per week do you exercise?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Never", "1 to 2 days", "3 to 4 days", "5 to 7 days"].map(
              (option) => (
                <label
                  key={option}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                    formData.physicalActivity === option
                      ? "bg-lime-100 border-lime-500" // Selected state
                      : "bg-base-100 border-base-300" // Default state
                  }`}
                >
                  <input
                    type="radio"
                    name="physicalActivity"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-lg font-medium">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Question 5: Eating Habits */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Eating Habits</h2>
          <p className="mb-4">How often do you eat fruits and vegetables?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Rarely",
              "1 to 2 times a day",
              "3 to 4 times a day",
              "With every meal",
            ].map((option) => (
              <label
                key={option}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                  formData.eatingHabits === option
                    ? "bg-lime-100 border-lime-500" // Selected state
                    : "bg-base-100 border-base-300" // Default state
                }`}
              >
                <input
                  type="radio"
                  name="eatingHabits"
                  value={option}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-lg font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 6: Hydration */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Hydration</h2>
          <p className="mb-4">
            How many glasses of water do you drink per day?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Less than 4 glasses",
              "4 to 6 glasses",
              "6 to 8 glasses",
              "More than 8 glasses",
            ].map((option) => (
              <label
                key={option}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                  formData.hydration === option
                    ? "bg-lime-100 border-lime-500" // Selected state
                    : "bg-base-100 border-base-300" // Default state
                }`}
              >
                <input
                  type="radio"
                  name="hydration"
                  value={option}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-lg font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 7: Stress */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Stress</h2>
          <p className="mb-4">How often do you feel stressed?</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Never", "Rarely", "Sometimes", "Often", "Very often"].map(
              (option) => (
                <label
                  key={option}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                    formData.stress === option
                      ? "bg-lime-100 border-lime-500" // Selected state
                      : "bg-base-100 border-base-300" // Default state
                  }`}
                >
                  <input
                    type="radio"
                    name="stress"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-lg font-medium">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Question 8: Concentration */}
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Concentration</h2>
          <p className="mb-4">
            How would you rate your ability to concentrate during the day?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Very weak", "Weak", "Average", "Good", "Very good"].map(
              (option) => (
                <label
                  key={option}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm border ${
                    formData.concentration === option
                      ? "bg-lime-100 border-lime-500" // Selected state
                      : "bg-base-100 border-base-300" // Default state
                  }`}
                >
                  <input
                    type="radio"
                    name="concentration"
                    value={option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-lg font-medium">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Checkbox for Suggestions */}
        <div className="card bg-base-200 p-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agreeToSuggestions"
              checked={formData.agreeToSuggestions}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to receive personalized suggestions based on my responses.
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
