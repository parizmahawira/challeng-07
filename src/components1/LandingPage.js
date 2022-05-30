import Navbar from "../components1/Navbar/Navbar";
import OurServise from "../components1/OurService/OurServise";
import Register from "../components1/Register/Register";
import WhyUs from "../components1/WhyUs/WhyUs";
import Testimoni from "../components1/Testimoni/Testimoni";
import FAQ from "../components1/FAQ/index";
import HeroSection from "../components1/HeroSection/HeroSection";
import Footer from "../components1/Footer/Footer";



function LandingPage() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <OurServise />
            <WhyUs /> 
            <Testimoni />
            <Register />
            <FAQ />
            <Footer />
        </div>
    )
}
export default LandingPage;