import Layout from "../components/UI/layout";
import HeroImage from "../assets/hero.jpg"
import CarouselHero from "../components/widgets/heroHOme";
import TestimonialCarousel from "../components/widgets/testimonies";
import WhyChooseUsSection from "../components/widgets/whychooseus";
import CryptoIRAsSection from "../components/widgets/irasection";
const IndexPage = () => {
    return (
        <Layout>
           <div className="flex justify-center">
                <div className="mt-5 w-[95%] h-[80vh] flex flex-col  md:flex-row items-center p-2 bg-white rounded-lg shadow-md border-2">
                    <div className="md:w-[60%] py-3 px-2 md:p-12">
                        <h1 className="text-[2rem] md:text-[3rem] md:w-[400px] font-extralight my-2 font-strecth-lg">
                        Invest now and secure your future.
                        </h1>
                        <p>We can help you get started .</p>

                        <div className="flex gap-4 md:my-12 flex-col md:flex-row">
                            {/* Button */}
                            <div className="">
                                <p className="my-3">I know what I want.</p>
                                <button className="text-[0.8rem]  w-full bg-blue-600 px-3 py-2 rounded-l-lg rounded-b-lg text-white"> Create an account </button>
                            </div>

                            <div className="">
                                <p className="my-3">I know what I want.</p>
                                <button className="text-[0.8rem]  w-full bg-white border-2 border-blue-600 px-3 py-2  rounded-r-lg rounded-b-lg text-blue-600"> Create an account </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <img src={HeroImage} className="rounded-t-xl rounded-l-2xl"/>
                    </div>
                </div>
           </div>
           <CarouselHero />
           <TestimonialCarousel />
           <CryptoIRAsSection />
           <WhyChooseUsSection />


        </Layout>
    )
}

export default IndexPage