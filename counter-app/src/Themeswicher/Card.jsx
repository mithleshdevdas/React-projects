import React from "react";


export default function Card() {
  return (
    <div className="    dark:bg-yellow-800 ">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src=""
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
     
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
      
        
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
          className="text-white bg-blue-700 
           text-m px-5 py-2.5
            text-center
            dark:bg-blue-600 "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
// 