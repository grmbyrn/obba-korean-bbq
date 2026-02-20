"use client";
import { useState } from "react";
import Image from "next/image";

const dishes = [
  {
    title: "Bibimbap",
    price: "29$/390g",
    description: "Classic Korean rice bowl",
    image: "/images/bibimbap.jpg",
  },
  {
    title: "Fried Rice Noodles",
    price: "29$/390g",
    description: "Savory stir-fried noodles",
    image: "/images/fried-rice-noodles.jpg",
  },
  {
    title: "Korean BBQ",
    price: "20$/390g",
    description: "Grilled marinated meats",
    image: "/images/korean-bbq.jpg",
  },
  {
    title: "Korean Dessert",
    price: "29$/390g",
    description: "Sweet traditional treat",
    image: "/images/korean-dessert.jpg",
  },
  {
    title: "Steak Tartar",
    price: "29$/390g",
    description: "Fresh seasoned beef",
    image: "/images/steak-tartar.jpg",
  },
];

export default function MainDishes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          Main <span className="text-orange-500">dishes</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[450px]">
        {dishes.map((dish, idx) => {
          const isActive = active === idx;
          const isAnyActive = active !== null;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : idx)}
              className={`
                relative overflow-hidden rounded-xl cursor-pointer 
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                w-full h-[250px] md:h-full
                
                /* Desktop Flex Logic */
                ${isActive ? "md:flex-[2.5]" : isAnyActive ? "md:flex-[0.7]" : "md:flex-[1]"}
              `}
            >
              {/* Background Image */}
              <Image
                src={dish.image}
                alt={dish.title}
                fill
                className={`object-cover transition-transform duration-700 ${isActive ? "scale-110" : "scale-100"}`}
              />

              {/* Dark Gradient Overlay - Only visible when active */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 
                ${isActive ? "opacity-100" : "opacity-0"}`}
              />

              {/* Info Card - Slides up from below the bottom edge */}
              <div
                className={`
                  absolute bottom-0 left-0 w-full p-6 text-white 
                  transition-all duration-500 ease-out flex flex-col justify-end
                  /* Hidden State: pushed down 100% and transparent */
                  ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0 pointer-events-none"
                  }
                `}
                style={{ height: "35%" }}
              >
                <h4 className="text-xl md:text-2xl font-bold">{dish.title}</h4>
                <p className="text-xs md:text-sm text-orange-400 mt-2 font-semibold uppercase">
                  {dish.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
