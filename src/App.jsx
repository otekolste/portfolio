import { Outlet } from 'react-router-dom';
import Nav from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="w-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
