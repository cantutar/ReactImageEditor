import ImageEditor from "./components/ImageEditor";
import MobileNavbar from "./components/MobileNavbar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="fixed bg-black h-full w-full text-white">
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="w-full h-screen lg:container lg:mx-auto lg:pt-6 lg:mr-6">
          <h1 className="flex justify-start lg:justify-end text-black py-2 lg:text-pink-500 text-5xl font-semibold hover:text-pink-400 bg-pink-500 lg:bg-transparent pl-6 lg:pl-0">
            PicturEditor
          </h1>
          <div className="w-full h-screen flex flex-col px-3">
            <ImageEditor />
            <Slider />
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
