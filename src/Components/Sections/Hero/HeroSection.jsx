import HeroImg from "../../../assets/Images/hero-sec-img.jpg";

export default function HeroSec() {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-24 py-5 my-10 px-6 md:px-20 bg-light"
    >
      {/* HERO HEADLINE + IMAGE */}
      <div className="w-full flex flex-col max-w-screen-2xl md:flex-row justify-between items-center gap-12 mx-auto">
        {/* Text */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl justify-center items-center text-center md:text-left">
          <h1 className="font-bold text-3xl text-secondary md:text-4xl text-wrap">
            Smart Solutions for Businesses That Want to Grow with Confidence
          </h1>
          <p className="text-gray-700 text-md">
            Accurate bookkeeping, reliable accounting, and tax compliance — so
            you can run your business without stress or guesswork.
          </p>
          <a
            href="#contact"
            className="bg-primary text-center hover:bg-secondary w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
          >
            Get Started Today!
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center max-w-sm">
          <img
            className="rounded-[50%] w-full h-72 md:h-96 object-cover shadow-lg"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
