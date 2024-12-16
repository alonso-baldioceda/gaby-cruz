import React from "react";

const Map: React.FC = () => {
  return (
    <div className="shadow-lg border-solid border border-base-200">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          filter: "grayscale(0.65) contrast(1.2) opacity(0.65)",
        }}
      ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-lg border-solid border border-base-200">
        <div className="lg:w-1/2 px-6">
          <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-gray-500">
            Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-gray-500 leading-relaxed">example@email.com</a>
          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-gray-500">123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
