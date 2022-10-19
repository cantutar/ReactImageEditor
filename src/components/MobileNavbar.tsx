import React, { FC } from "react";

interface Props {
  Names: Array<{ name: string; icon: React.ReactNode }>;
}

const MobileNavbar: FC<Props> = ({ Names }) => {
  return (
    <>
      <div className="lg:hidden fixed bottom-0 bg-pink-700 w-full w z-50 flex justify-around p-6">
        <>
          {Names.map((item) => {
            return (
              <div className="flex items-center" key={item.name}>
                <>{item.icon}</>
                <span className="hidden md:block">{item.name}</span>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
};
export default MobileNavbar;
