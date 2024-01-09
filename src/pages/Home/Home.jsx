import Blogs from "./Blogs/Blogs";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Blogs />
            <Testimonials />
        </>
    );
};

export default Home;