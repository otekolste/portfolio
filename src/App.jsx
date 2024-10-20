import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./assets/constellation.svg";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div
        className="h-screen bg-center bg-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Nav />
        <main className="w-screen flex min-h-screen justify-center items-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
