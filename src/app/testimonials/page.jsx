import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Fitness Enthusiast",
      review:
        "Habit Forge has completely transformed my daily routine. The personalized plans are easy to follow, and I've never felt more motivated!",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 4,
    },
    {
      id: 2,
      name: "James Carter",
      role: "Entrepreneur",
      review:
        "The progress tracking feature is a game-changer. It keeps me accountable, and I love seeing my improvements over time. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Yoga Instructor",
      review:
        "I've tried many habit apps, but Habit Forge stands out. The coaching and diet plans are top-notch. It's worth every penny!",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Michael Patel",
      role: "Software Developer",
      review:
        "The reminders and analytics are fantastic. They help me stay on track even during my busiest days. Great job, Habit Forge!",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Olivia Kim",
      role: "College Student",
      review:
        "Habit Forge has helped me stay productive and organized. The habit plans are simple yet effective. I can't imagine my life without it!",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Daniel Nguyen",
      role: "Marketing Manager",
      review:
        "The premium content is amazing. The webinars and guides have taught me so much about building habits. Highly recommend upgrading!",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Freelancer",
      review:
        "Habit Forge has helped me balance work and personal life. The reminders keep me on track, and the community is so supportive.",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Ethan Brown",
      role: "Parent",
      review:
        "As a busy parent, Habit Forge has been a lifesaver. The simple interface and actionable plans make it easy to stick to my goals.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      rating: 4.8,
    },
  ];

  // Function to generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ½
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="p-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="card bg-base-100 shadow-md p-6 flex flex-col md:flex-row items-start"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mr-6 mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="flex justify-end">
                <div className="text-lg">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
