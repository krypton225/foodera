import { Navbar, Landing, LandingState, About } from "./components/main";

function App() {
  return (
    <div className="foodera-app selection:bg-primary-light selection:text-white">
      <Navbar />

      <Landing />
      <LandingState />

      <About />
    </div>
  );
}

export default App;