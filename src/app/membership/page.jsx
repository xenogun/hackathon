import React from "react";

const Membership = () => {
  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[rgb(34,73,69)] mb-8 text-center">
        Choose Your Membership Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Free Membership
          </h2>
          <p className="text-lg font-bold text-center mb-4">$0/month</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access to a basic habit plan</li>
            <li>Basic habit tracking and reminders</li>
            <li>Basic diet plans </li>
            <li>Community support forum</li>
            <li>Weekly progress reports</li>
          </ul>
          <button className="btn btn-primary w-full mt-6">Get Started</button>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-md border-2 border-lime-green">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Pro Membership
          </h2>
          <p className="text-lg font-bold text-center mb-4">$19.99/month</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Unlimited habit tracking</li>
            <li>Detailed habit plans with actionable steps</li>
            <li>Personalized coaching sessions </li>
            <li>Advanced diet plans tailored to your goals</li>
            <li>Exclusive access to premium content</li>
            <li>Priority customer support</li>
            <li>Daily progress tracking and analytics</li>
            <li>Customizable habit reminders</li>
          </ul>
          <button className="btn btn-success w-full mt-6">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
