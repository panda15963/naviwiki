import { NavBar } from "../components/NavBar";
import Footer from "../components/footer"
export default function CCIC() {
  return (
    <div className="wrapper">
      <div className="flex">
        <NavBar />
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center w-full p-5 rounded-lg">
            <div className="container max-w-screen-lg mx-auto">
              <div className="text-xl font-vold mt-5 mb-3 text-center">
                <h1>CCIC</h1>
                <h2>https://goddino.tistory.com/154</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
