import Blogs from "./Blogs/Blogs";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import OurApproach from "./OurApproach/OurApproach";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <OurApproach />
            <Blogs />
            <Testimonials />
        </>
    );
};

export default Home;