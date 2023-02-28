import { Navbar, Landing, LandingState, About } from "./components/main";

function App() {
  return (
    <div className="foodera-app">
      <Navbar />

      <Landing />
      <LandingState />

      <About />
    </div>
  );
}

export default App;