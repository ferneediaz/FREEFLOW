import React from 'react';

const Banner = ({ name, childStyles, parentStyles }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden freeflow-gradient ${parentStyles}`}>
    <p className={`font-bold text-white text-5xl font-poppins leading-70 ${childStyles}`}>{name}</p>
    <div className="absolute w-24 h-24 sm:w-16 sm:h-16 white-bg -top-8 left-1/4 transform rotate-45" />
    <div className="absolute w-32 h-32 sm:w-24 sm:h-24 white-bg bottom-1/4 right-1/4 transform rotate-45" />
    <div className="absolute w-40 h-40 sm:w-32 sm:h-32 white-bg -bottom-16 left-1/4 transform rotate-45" />
    <div className="absolute w-32 h-32 sm:w-24 sm:h-24 white-bg -top-16 -left-16 transform rotate-45" />
    <div className="absolute w-56 h-56 sm:w-40 sm:h-40 white-bg -bottom-28 -right-16 transform rotate-45" />
    <div className="absolute w-40 h-40 sm:w-24 sm:h-24 white-bg -bottom-24 -left-20 transform rotate-45" />
    <div className="absolute w-24 h-24 sm:w-16 sm:h-16 white-bg -top-16 -right-12 transform rotate-45" />
  </div>
);

export default Banner;
