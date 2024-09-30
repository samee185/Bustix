import React from "react";

const Amenities = () => {
  const amenities = [
    { icon: "📶", label: "Wifi" },
    { icon: "🛏️", label: "Pillow" },
    { icon: "🥤", label: "Water Bottle" },
    { icon: "🍹", label: "Soft Drinks" },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 py-6">
      <h2 className="text-2xl md:text-4xl text-[rgba(4,72,108,0.94)] font-bold text-center uppercase">
        Our Amenities
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Have a look at our popular reasons why you should choose our bus. Just
        choose a bus and get a ticket for your great journey!
      </p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mt-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 shadow-md shadow-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl mb-3 ">{amenity.icon}</div>
            <h3 className="text-[16px] font-medium text-gray-800">
              {amenity.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
