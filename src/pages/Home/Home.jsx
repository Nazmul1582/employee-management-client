import Blogs from "./Blogs/Blogs";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import OurApproach from "./OurApproach/OurApproach";
import Testimonials from "./Testimonials/Testimonials";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <OurApproach />
            <Blogs />
            <Testimonials />
            <NewsLetter />
        </>
    );
};

export default Home;