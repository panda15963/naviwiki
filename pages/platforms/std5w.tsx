import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
export default function STD5W() {
  return (
    <div className="wrapper">
      <div className="flex">
        <NavBar />
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center w-full p-5 rounded-lg">
            <h1 className="text-2xl grid place-items-center font-bold">
              The STD5W Platform page
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
