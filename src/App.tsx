import { Navbar, Landing, LandingState, About, WatchStory } from "./components/main";

function App() {
  return (
    <div className="foodera-app selection:bg-primary-light selection:text-white">
      <Navbar />

      <Landing />
      <LandingState />

      <About />
      <WatchStory />
    </div>
  );
}

export default App;