import React from "react";

export default function HomeScreen() {
  return (
    <div>
      <ul className="flex conten px-1 bg-[#376167] rounded-full divide-solid divide-x divide-white divide-x absolute right-3 top-3">
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">STM</li>
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">GOG</li>
        <li className="px-1 pt-1 pb-0.5 text-white cursor-pointer">ALL</li>
      </ul>
    </div>
  );
}
