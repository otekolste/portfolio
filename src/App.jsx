import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <div className="flex flex-col">
        <main className="w-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
