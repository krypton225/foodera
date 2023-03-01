import {
  Navbar,
  Landing,
  LandingState,
  About,
  WatchStory,
  Explore,
  Testimonials,
  FAQ
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

      <Testimonials />

      <FAQ />
    </div>
  );
}

export default App;