import { Bars3Icon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <>
      <div className="hidden lg:flex flex-row h-full">
        {/* <div className="flex flex-col px-7 bg-pink-500 text-black py-6">
          <Bars3Icon className="h-8 w-8" />
        </div> */}
        <div className="flex flex-col justify-evenly px-24 bg-pink-500 text-black py-18 text-3xl">
          <div className="hover:text-slate-600">
            <h2>sadasd</h2>
          </div>
          <div>
            <h2>sadasd</h2>
          </div>
          <div>
            <h2>sadasd</h2>
          </div>
          <div>
            <h2>sadasd</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
