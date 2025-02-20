import Footer from "@/components/Footer";
import React from "react";

export default function page() {
  return (
    <div data-theme="lemonade" className="px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-8 ">
          About HabitForge
        </h1>

        {/* Mission Section */}
        <section className="mb-12 flex">
          <img src="/about-picture.jpg" alt="" className="w-1/2" />
          <div className="px-5">
            <h2 className="text-4xl font-semibold mb-4 text-[rgb(34,73,69)]">
              Our Mission
            </h2>
            <p
              className="text-lg text-gray-700 font-serif
"
            >
              At Habit Forge, we believe that small, consistent changes can lead
              to transformative results. Our mission is to empower individuals
              to build healthy habits tailored to their unique lifestyles,
              routines, and goals. Whether you're looking to improve your
              fitness, nutrition, mental health, or productivity, Habit Forge
              provides personalized plans that fit seamlessly into your daily
              life.
            </p>
          </div>
        </section>

        <h2 className="text-4xl font-sans font-bold mb-4 text-center text-[rgb(34,73,69)]">
          OUR IMPACT
        </h2>
        {/* Statistics Section */}
        <section className="mb-12 bg-[#32CD32] p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-base-200 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-lime-green">95%</h3>
              <p className="text-gray-700">Customer Satisfaction Rate</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-lime-green">50K+</h3>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-lime-green">3M+</h3>
              <p className="text-gray-700">Habits Tracked</p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-lime-green">80%</h3>
              <p className="text-gray-700">Users Achieving Their Goals</p>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
          <div className="space-y-6">
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                1. Personalization at Scale
              </h3>
              <p className="text-gray-700">
                We aim to make personalized habit-building accessible to
                everyone. By leveraging advanced algorithms and user data, we
                create plans that adapt to each individual's unique needs and
                preferences.
              </p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                2. Building a Global Community
              </h3>
              <p className="text-gray-700">
                Our goal is to connect millions of people worldwide, fostering a
                supportive community where users can share their progress,
                challenges, and successes.
              </p>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                3. Continuous Improvement
              </h3>
              <p className="text-gray-700">
                We are committed to constantly improving our platform based on
                user feedback and the latest research in habit formation and
                behavioral science.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-gray-700">
            Behind Habit Forge is a passionate team of health enthusiasts, data
            scientists, and software engineers dedicated to helping you achieve
            your goals. We combine expertise in behavioral psychology,
            technology, and design to create a platform that is both effective
            and enjoyable to use.
          </p>
        </section>
      </div>
    </div>
  );
}
