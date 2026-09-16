import Container from "../common/Container";
import heroImage from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <div>
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-800 md:text-6xl">
              Build Your Ideal
              <br />

              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack
              that fits your next project.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Technologies
              </a>

              <button className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-medium text-slate-600">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Development technology stack"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;