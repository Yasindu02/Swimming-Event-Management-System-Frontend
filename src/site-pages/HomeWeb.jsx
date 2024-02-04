import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Why from "../components/Why";
// import Customers from "../components/Customers";
import Hero from "../components/Hero";

const HomeWeb = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Customers /> */}
      <Why />
      <Footer />
    </div>
  );
};

export default HomeWeb;
