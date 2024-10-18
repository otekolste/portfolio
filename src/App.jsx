import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./assets/constellation.svg";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div
        className="bg-center bg-repeat"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Nav />
        <div className="flex flex-col">
          <main className="w-screen flex h-screen justify-center items-center">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
