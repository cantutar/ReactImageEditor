import React, { FC } from "react";

interface Props {}

const Slider: FC<Props> = () => {
  return (
    <>
      <input
        type="range"
        min="0"
        step="10"
        max="100"
        name="Slider"
        id="Slider"
        className="mt-3 accent-pink-500 bg-gray-200 h-2 rounded lg:w-1/2 cursor-ew-resize "
      />
    </>
  );
};
export default Slider;
