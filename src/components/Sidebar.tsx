import { Bars3Icon } from "@heroicons/react/24/solid";

import React, { FC, useState } from "react";

interface Props {
  Names: Array<{ name: string; icon: React.ReactNode }>;
}
const Sidebar: FC<Props> = ({ Names }) => {
  const [menuToggle, setMenuToggle] = useState(true);
  const onclickHandler = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <>
      <div className="hidden lg:flex duration-300 flex-row h-full fixed">
        <div
          className={`flex flex-col justify-evenly items-center ${
            menuToggle ? "pl-8" : "pl-4"
          } pr-8 bg-pink-500 text-black py-18 text-3xl transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col pl-2 bg-pink-500 text-black items-center">
            <button className="hover:text-white" onClick={onclickHandler}>
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
          {Names.map((item) => {
            return (
              <div
                className="font-semibold hover:text-white flex justify-around items-center"
                key={item.name}
              >
                <>{item.icon}</>
                <h2 className={menuToggle ? "hidden" : ""}>{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
