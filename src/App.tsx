import { Navbar, Landing, LandingState } from "./components/main";

function App() {
  return (
    <div className="foodera-app">
      <Navbar />

      <Landing />
      <LandingState />
    </div>
  );
}

export default App;