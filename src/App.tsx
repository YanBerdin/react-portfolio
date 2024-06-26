import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { Skills } from "./components/Skills";
import {Project1} from "./components/Project1";
import {ProjectA} from "./components/ProjectA";
import {Form} from "./components/Form";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*<Sponsors /> */}
      <Skills />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Project1 />
      <Cta />
      <ProjectA />
      <Form />
        {/*<Testimonials /> */}
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
