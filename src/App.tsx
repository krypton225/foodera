import {
  Navbar,
  Landing,
  LandingState,
  About,
  WatchStory,
  Explore
} from "./components/main";

function App() {
  return (
    <div className="foodera-app selection:bg-primary-light selection:text-white">
      <Navbar />

      <Landing />
      <LandingState />

      <About />
      <WatchStory />

      <Explore />
    </div>
  );
}

export default App;