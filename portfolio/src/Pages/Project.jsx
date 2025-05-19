import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronRight size={36} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
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
      description:
        "The Porsche 911 is a true icon in the sports car world, known for its sleek design and superior handling.",
      Languages:" React, Taiwlid CSS",
      github:"gadaef",
      Link:"fdasdg"
    },
    {
      image: "/Assets/about.png",
      description:
        "The Porsche 911 is a true icon in the sports car world, known for its sleek design and superior handling.",
      Languages:" React, Taiwlid CSS",
      github:"gadaef",
      Link:"fdasdg"
    },
    {
      image: "/Assets/code.jpeg",
      description:
        "The Porsche 911 is a true icon in the sports car world, known for its sleek design and superior handling.",
      Languages:" React, Taiwlid CSS",
      github:"gadaef",
      Link:"fdasdg"
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
    responsive:[
        {
            breakpoint:720,
            settings:{
                slidesToShow:1,
            }
        }
    ]
  };

  return (
    <section id="cars" className="px-6 py-10 overflow-x-hidden mb-16">
      <div>
        {/* Title */}
        <div className="relative">
          <div className="text-5xl md:text-8xl font-lora font-bold text-Custom-gray text-center">
            Projects
          </div>
        </div>

        {/* Slider */}
        <div className="mt-20 w-full min-w-screen  relative">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i}> {/* This adds spacing between slides */}
                <div className="h-[500px] border border-gray-300 rounded-lg shadow-lg px-6 py-8 bg-white flex flex-col justify-between">
                    <div>
                  <img
                    src={d.image}
                    alt={d.name}
                    className=" h-auto object-contain  rounded-md"
                  />
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
