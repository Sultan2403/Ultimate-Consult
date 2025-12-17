import HeroImg from "../../../assets/Images/hero-sec-img.avif";

export default function HeroSec() {
  return (
    <section className="p-4 px-10 mt-32 w-full flex flex-col gap-10 justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-12">
        <div className="flex flex-col gap-3 flex-1 md:flex-[2] max-w-xl text-center md:text-left">
          <h1 className="font-semibold text-3xl flex flex-col gap-1">
            <p>
              Smart Financial Solutions for Businesses <br />
            </p>
            <p>That Want to Grow with Confidence</p>
          </h1>
          <p className="text-gray-700 text-md">
            Accurate bookkeeping, reliable accounting, and tax compliance - so
            you
            <br />
            can run your business without stress or guesswork.
          </p>
        </div>
        <div className="flex-1 flex justify-center max-w-sm">
          <img
            className="rounded-[50%] w-full h-72 md:h-96 object-cover"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
