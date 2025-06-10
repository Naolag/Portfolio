import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronRight size={36} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronLeft size={36} />
    </div>
  );
}

const data = [
  {
    image: "/Assets/Your-car.jpg",
    name: "Your-car",
    description:
      "YourCar is a sleek, high-end car dealership website built to give users a premium browsing experience. With a luxurious UI and smooth navigation, it helps customers find their dream ride effortlessly. From showcasing exotic cars to clear CTAs like “Discover,” it blends aesthetics with functionality. Whether you're hunting for a budget car or a beast on wheels, YourCar has you covered.",
    Languages: "React, Tailwind CSS",
    github: "https://github.com/Naolag/Chauffeur.git",
    Link: "https://682a20111e1b00956ed68e72--yourcareapp.netlify.app/",
  },
  {
    image: "/Assets/fitness-tracker.jpg",
    name: "Fitness tracker",
    description:
      "FitnessApp is a sleek, modern fitness tracker web app that empowers users to track their workouts, progress, and nutrition.",
    features: [
      "🏋️ Workout Library: Discover and explore categorized workouts like Pilates, Core Training, and more.",
      "📊 Progress Tracker: Visualize your fitness journey through progress metrics.",
      "🍎 Nutrition Guide: Maintain healthy eating habits with personalized nutrition tips.",
      "🙋‍♂️ User Authentication: Secure Login/Register system for personalized user profiles.",
      "🧠 Responsive UI: Designed with mobile-first principles and clean UX in mind.",
    ],
    Languages: "React, Tailwind CSS",
    github: "https://github.com/Naolag/Fitness_tracker.git",
    Link: "https://fitness-tracker-o1cv.vercel.app",
  },
];

function Cars() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="project"
      className="px-6 py-10 min-h-[10%] overflow-x-hidden mb-16 "
    >
      <div>
        {/* Title */}
        <div className="relative">
          <h2 className="text-5xl md:text-8xl font-lora font-bold text-Custom-gray text-center">
            Projects
          </h2>
        </div>

        {/* Slider */}
        <div className="mt-20 w-full">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  {/* Image */}
                  <div className="md:w-1/2 w-full">
                    <img
                      src={d.image}
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
                      alt={d.name}
                    />
                  </div>

                  {/* Info */}
                  <div className="md:w-1/2 w-full">
                    <h3 className="text-3xl md:text-4xl  font-serif mb-4 text-Custom-gray">
                      {d.name}
                    </h3>

                    <p className="text-sm md:text-lg  text-gray-700 leading-relaxed">
                      {d.description}
                    </p>

                    {/* Features */}
                    {d.features && (
                      <ul className="mt-4 list-disc list-inside space-y-2 text-base text-gray-700">
                        {d.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}

                    {/* Tech & Links */}
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-Custom-red">
                        Tech Stack: {d.Languages}
                      </p>
                      <div className="flex gap-4 mt-3 items-center">
                        <a
                          href={d.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:opacity-80 transition"
                        >
                          <Github size={24} />
                        </a>
                        <a
                        href={d.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                       >
                             Live Site 🚀
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Cars;
