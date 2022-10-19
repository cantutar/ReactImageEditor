import ImageEditor from "./components/ImageEditor";
import MobileNavbar from "./components/MobileNavbar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

// icon imports
import {
  SunIcon,
  PhotoIcon,
  CameraIcon,
  EllipsisHorizontalCircleIcon,
  FilmIcon,
  FunnelIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

const DEFAULT_OPTIONS = [
  { name: "Brightness", value: 0, icon: <SunIcon className="h-6 w-6" /> },
  { name: "Contrast", value: 0, icon: <PhotoIcon className="h-6 w-6" /> },
  {
    name: "Saturation",
    value: 0,
    icon: <CameraIcon className="h-6 w-6" />,
  },
  {
    name: "Grayscale",
    value: 0,
    icon: <EllipsisHorizontalCircleIcon className="h-6 w-6" />,
  },
  { name: "Sepia", value: 0, icon: <FilmIcon className="h-6 w-6" /> },
  { name: "Hue Rotate", value: 0, icon: <FunnelIcon className="h-6 w-6" /> },
  { name: "Blur", value: 0, icon: <EyeSlashIcon className="h-6 w-6" /> },
];

function App() {
  return (
    <div className="bg-black h-auto w-full text-white">
      <div className="flex flex-row w-full h-full">
        <Sidebar Names={DEFAULT_OPTIONS} />
        <div className="w-full h-screen lg:h-[85vh] lg:container 2xl:max-w-full lg:mx-auto lg:mr-6">
          <h1 className="flex justify-start lg:justify-end text-black py-2 lg:text-pink-500 text-5xl font-semibold hover:text-pink-400 bg-pink-500 lg:bg-transparent pl-6 lg:pl-0">
            PicturEditor
          </h1>
          <div className="w-full h-full flex flex-col px-3 lg:justify-center lg:items-center">
            <ImageEditor />
            <Slider />
          </div>
          <MobileNavbar Names={DEFAULT_OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default App;
