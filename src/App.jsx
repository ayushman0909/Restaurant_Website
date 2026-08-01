import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
 import PopularDishes from "./components/PopularDishes";
 import WhyChooseUs from "./components/WhyChooseUs";
// import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
// import Booking from "./components/Booking";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <PopularDishes /> 
    <WhyChooseUs />
       {/* <Gallery />
      <Testimonials />
      <Booking />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;