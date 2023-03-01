import {
  Navbar,
  Landing,
  LandingState,
  About,
  WatchStory,
  Explore,
  Testimonials,
  FAQ,
  FreshDaily
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

      <FreshDaily />
    </div>
  );
}

export default App;